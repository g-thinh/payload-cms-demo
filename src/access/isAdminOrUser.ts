import { Access } from "payload/config";
import { Admin, User } from "payload/generated-types";

/**
 * Access control type that allows a user or an admin to modify a document
 * in the users collection.
 * @param param0
 * @returns boolean
 */
export const isAdminOrUser: Access<any, Admin | User> = async ({ req }) => {
  if (req.user) {
    const admin = await req.payload.findByID({
      collection: "admins",
      id: req.user.id,
    });

    if (admin) {
      return true;
    }

    return {
      id: {
        equals: req.user.id,
      },
    };
  }

  return false;
};
