import { CollectionConfig } from "payload/types";
import { isAdminOrUser } from "../access/isAdminOrUser";

/**
 * A User is an authenticated collection of users that can access most collections.
 */
export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
  },
  auth: {
    tokenExpiration: 7200,
    verify: false,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000,
    cookies: {
      secure: true,
      sameSite: "none",
    },
  },
  access: {
    read: isAdminOrUser,
    update: isAdminOrUser,
    create: () => true,
    delete: isAdminOrUser,
  },
  fields: [
    {
      name: "name",
      type: "text",
      saveToJWT: true,
    },
  ],
};
