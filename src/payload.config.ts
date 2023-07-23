import { buildConfig } from "payload/config";
import path from "path";
import { Admins } from "./collections/Admins";
import { Users } from "./collections/Users";
import { Examples } from "./collections/Examples";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Admins.slug,
  },
  collections: [Admins, Users, Examples],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
