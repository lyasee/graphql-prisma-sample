import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Context } from "../../utils";

export const mutation = {
  async signup(parent, args, ctx: Context) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.prisma.createUser({ ...args, password });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },

  async login(parent, { email, password }, ctx: Context) {
    const user = await ctx.prisma.user({ email });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },
};

export const adminMutation = {
  async adminSignup(parent, args, ctx: Context) {
    const password = await bcrypt.hash(args.password, 10);
    const admin = await ctx.prisma.createAdmin({ ...args, password });

    return {
      token: jwt.sign({ adminId: admin.id }, process.env.ADMIN_SECRET),
      admin,
    };
  },

  async adminLogin(parent, { username, password }, ctx: Context) {
    const admin = await ctx.prisma.admin({ username });

    if (!admin) {
      throw new Error(`No such user found for username: ${username}`);
    }

    const valid = await bcrypt.compare(password, admin.password);

    if (!valid) {
      throw new Error("Invalid password");
    }

    return {
      token: jwt.sign({ adminId: admin.id }, process.env.ADMIN_SECRET),
      admin,
    };
  },
};
