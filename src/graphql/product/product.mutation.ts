import { Context, checkAdmin } from "../../utils";

export const mutation = {
  async createProduct(
    parent,
    { name, image, price, description, officialSite, brandId },
    ctx: Context,
    info
  ) {
    checkAdmin(ctx);

    if (!brandId) {
      throw new Error(`BrandId Invalidate`);
    }

    return ctx.prisma.createProduct({
      name,
      image,
      description,
      officialSite,
      price,
      brand: {
        connect: {
          id: brandId,
        },
      },
    });
  },

  async updateProduct(
    parent,
    { id, name, image, price, description, officialSite, brandId },
    ctx: Context,
    info
  ) {
    checkAdmin(ctx);

    const productExists = await ctx.prisma.$exists.product({
      id,
    });

    if (!productExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.prisma.updateProduct({
      where: { id },
      data: {
        name,
        image,
        price,
        description,
        officialSite,
        brand: {
          connect: {
            id: brandId,
          },
        },
      },
    });
  },

  async deleteProduct(parent, { id }, ctx: Context, info) {
    checkAdmin(ctx);

    const productExists = await ctx.prisma.$exists.product({
      id,
    });

    if (!productExists) {
      throw new Error(`Product not found`);
    }

    return ctx.prisma.updateProduct({
      where: { id },
      data: { deletedAt: new Date() },
    });
  },
};
