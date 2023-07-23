import { Access } from "payload/config";
import { User } from "../payload-types";

/**
 * Access control type that allows a user to access their own document in the users collection.
 * @param req
 * @returns boolean
 */
export const isUser: Access<any, User> = ({ req }) => {
  if (req.user) {
    // check if the user.id matches with the request's user id
    return {
      id: {
        equals: req.user.id,
      },
    };
  }

  return false;
};
