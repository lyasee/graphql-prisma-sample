import { Context } from "../../utils";

export const subscription = {
  productSubscription: {
    subscribe: async (parent, args, ctx: Context) => {
      return ctx.prisma.$subscribe
        .product({
          mutation_in: ["CREATED", "UPDATED"],
        })
        .node();
    },
    resolve: (payload) => {
      return payload;
    },
  },
};
