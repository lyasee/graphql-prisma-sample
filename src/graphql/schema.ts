import { print } from "graphql";
import gql from "graphql-tag";

const schema = gql`
  type Query {
    me: User
  }

  type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }

  type Subscription {
    productSubscription: Product
  }
`;

export default print(schema);
