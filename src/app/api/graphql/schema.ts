//./api/graphql/schema.ts

import { builder } from "./builder";

import "./types/Comment";
import "./types/Friend";
import "./types/Like";
import "./types/Profile";
import "./types/Post";
import "./types/User";


import { writeFileSync } from "fs";
import { resolve } from "path";
import { printSchema } from "graphql";

export const schema = builder.toSchema({});

writeFileSync(resolve(__dirname, "./schema.graphql"), printSchema(schema));
