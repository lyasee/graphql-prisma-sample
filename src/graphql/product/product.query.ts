import { Context } from "../../utils";

export const query = {
  products(parent, args, ctx: Context) {
    return ctx.prisma.productsConnection(args);
  },

  product(parent, { id }, ctx: Context) {
    return ctx.prisma.product({ id });
  },
};
