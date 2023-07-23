import { buildConfig } from "payload/config";
import path from "path";
import { Admins } from "./collections/Admins";
import { Users } from "./collections/Users";
import { Examples } from "./collections/Examples";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Admins.slug,
  },
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || "",
    process.env.PAYLOAD_PUBLIC_SITE_URL || "",
  ].filter(Boolean),
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || "",
    process.env.PAYLOAD_PUBLIC_SITE_URL || "",
  ].filter(Boolean),
  collections: [Admins, Users, Examples],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
