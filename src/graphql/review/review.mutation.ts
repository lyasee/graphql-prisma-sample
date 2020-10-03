import { Context, getUserId } from "../../utils";

export const mutation = {
  async createReview(parent, { content, productId }, ctx: Context, info) {
    const userId = getUserId(ctx);

    return ctx.prisma.createReview({
      content,
      author: {
        connect: {
          id: userId,
        },
      },
      product: {
        connect: {
          id: productId,
        },
      },
    });
  },

  async updateReview(parent, { id, content }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const reviewExists = await ctx.prisma.$exists.review({
      id,
      author: { id: userId },
    });

    if (!reviewExists) {
      throw new Error(`Review not found or you're not the author`);
    }

    return ctx.prisma.updateReview({
      where: { id },
      data: { content },
    });
  },

  async deleteReview(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);

    const reviewExists = await ctx.prisma.$exists.review({
      id,
      author: { id: userId },
    });

    if (!reviewExists) {
      throw new Error(`Review not found or you're not the author`);
    }

    return ctx.prisma.updateProduct({
      where: { id },
      data: { deletedAt: new Date() },
    });
  },
};
