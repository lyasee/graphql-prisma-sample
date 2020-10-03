import { Context } from "../../utils";

export const query = {
  brands(parent, args, ctx: Context) {
    return ctx.prisma.brandsConnection(args);
  },

  brand(parent, { id }, ctx: Context) {
    return ctx.prisma.brand({ id });
  },
};
