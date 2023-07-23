import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAuthenticated } from "../access/isAuthenticated";

/**
 * An Example is a collection of documents that is accessible to any authenticated users
 * but can only be modified by Admins.
 */
export const Examples: CollectionConfig = {
  slug: "examples",
  access: {
    read: isAuthenticated,
    delete: isAdmin,
    update: isAdmin,
    create: isAdmin,
  },
  fields: [{ name: "name", type: "text" }],
};
