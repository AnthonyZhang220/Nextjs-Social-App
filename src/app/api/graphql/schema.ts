import { builder } from "./builder";
import "./types/profile";
import "./types/post";
import "./types/user";

// Convert the schema builder to an executable GraphQL schema
export const schema = builder.toSchema();
