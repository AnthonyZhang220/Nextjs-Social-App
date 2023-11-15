import { builder } from "./builder";

// Convert the schema builder to an executable GraphQL schema
export const schema = builder.toSchema();
