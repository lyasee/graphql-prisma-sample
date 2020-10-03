import { Context } from "../../utils";

export const resolver = {
  products: ({ id }, args, ctx: Context) => {
    return ctx.prisma.brand({ id }).products();
  },
};
