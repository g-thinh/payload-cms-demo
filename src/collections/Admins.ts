import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

/**
 * An Admin is an authenticated collection of users who can access the Admin Panel UI
 * and can make any modification to any collection
 */
export const Admins: CollectionConfig = {
  slug: "admins",
  admin: {
    useAsTitle: "name",
    group: "Admins",
  },
  auth: {
    tokenExpiration: 7200,
    verify: false,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000,
  },
  access: {
    read: isAdmin,
    delete: isAdmin,
    create: isAdmin,
    update: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      saveToJWT: true,
    },
  ],
};
