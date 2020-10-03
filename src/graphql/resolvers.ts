import user from "./user";
import admin from "./admin";
import brand from "./brand";
import product from "./product";
import review from "./review";

export default {
  Query: {
    ...user.query,
    ...brand.query,
    ...product.query,
  },
  Mutation: {
    ...user.mutation,
    ...admin.mutation,
    ...brand.mutation,
    ...product.mutation,
    ...review.mutation,
  },
  Subscription: {
    ...product.subscription,
  },
  User: user.resolver,
  Brand: brand.resolver,
  Product: product.resolver,
  Review: review.resolver,
};
