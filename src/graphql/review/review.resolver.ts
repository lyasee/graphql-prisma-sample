import { Context } from "../../utils";

export const resolver = {
  product: ({ id }, args, ctx: Context) => {
    return ctx.prisma.review({ id }).product();
  },

  author: ({ id }, args, ctx: Context) => {
    return ctx.prisma.review({ id }).author();
  },
};
