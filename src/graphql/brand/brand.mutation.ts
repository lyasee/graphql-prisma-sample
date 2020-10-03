import { Context, checkAdmin } from "../../utils";

export const mutation = {
  async createBrand(parent, { name, image }, ctx: Context, info) {
    checkAdmin(ctx);

    const brandExists = await ctx.prisma.$exists.brand({
      name,
    });

    if (brandExists) {
      throw new Error(`Duplicate Brand Name`);
    }

    return ctx.prisma.createBrand({
      name,
      image,
    });
  },

  async updateBrand(parent, { id, name, image }, ctx: Context, info) {
    checkAdmin(ctx);

    return ctx.prisma.updateBrand({
      where: { id },
      data: { name, image },
    });
  },

  async deleteBrand(parent, { id }, ctx: Context, info) {
    checkAdmin(ctx);

    const brandExists = await ctx.prisma.$exists.brand({
      id,
      deletedAt: null,
    });

    if (!brandExists) {
      throw new Error(`Brand not found`);
    }

    return ctx.prisma.updateBrand({
      where: { id },
      data: { deletedAt: new Date() },
    });
  },
};
