import { mutation } from "./product.mutation";
import { resolver } from "./product.resolver";
import { query } from "./product.query";
import { subscription } from "./product.subscription";

const module = {
  mutation,
  resolver,
  query,
  subscription,
};

export default module;
