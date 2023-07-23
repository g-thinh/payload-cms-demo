import { Access } from "payload/config";
import { Admin } from "../payload-types";

/**
 * Access control type that allows an admin to access the collection.
 * @param req
 * @returns boolean
 */
export const isAdmin: Access<any, Admin> = async ({ req }) => {
  if (req.user) {
    const admin = await req.payload.findByID({
      collection: "admins",
      id: req.user.id,
    });

    if (admin) {
      return true;
    }
  }

  return false;
};
