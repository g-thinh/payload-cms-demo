import { Access } from "payload/config";

/**
 * Access control type that allows any authenticated user to access the collection.
 * @param req
 * @returns boolean
 */
export const isAuthenticated: Access = ({ req }) => {
  if (req.user) {
    return true;
  }

  return false;
};
