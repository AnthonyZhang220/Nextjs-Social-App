//./api/graphql/schema.ts

import { builder } from "./builder";

import "./types/Category";
import "./types/Comment";
import "./types/Like";
import "./types/Location";
import "./types/Media";
import "./types/Post";
import "./types/Profile";
import "./types/User";
import "./types/Friendship";

import { writeFileSync } from "fs";
import { resolve } from "path";
import { printSchema } from "graphql";

export const schema = builder.toSchema({});

writeFileSync(resolve(__dirname, "./schema.graphql"), printSchema(schema));
