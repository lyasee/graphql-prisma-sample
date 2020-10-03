import { mutation } from "./user.mutation";
import { resolver } from "./user.resolver";
import { query } from "./user.query";

const module = {
  mutation,
  resolver,
  query,
};

export default module;
