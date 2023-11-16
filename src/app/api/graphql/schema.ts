import { builder } from "./builder";
// import "./types/Profile";
// import "./types/Post";
// import "./types/User";

// Convert the schema builder to an executable GraphQL schema
export const schema = builder.toSchema();
