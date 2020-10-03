import { Context } from "../../utils";

export const resolver = {
  brand: ({ id }, args, ctx: Context) => {
    return ctx.prisma.product({ id }).brand();
  },

  reviews: ({ id }, args, ctx: Context) => {
    return ctx.prisma.product({ id }).reviews();
  },
};
