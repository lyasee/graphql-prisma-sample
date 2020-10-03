import { Context } from "../../utils";

export const resolver = {
  reviews: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).reviews();
  },
};
