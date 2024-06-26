import { Permissions } from "../enums/Permissions";

export const Roles = {
    ADMIN: [
      Permissions.VIEW_FILES,
      Permissions.UPLOAD_FILES,
      Permissions.DELETE_FILES,
      Permissions.CREATE_SESSION,
      Permissions.DELETE_SESSION,
      Permissions.MANAGE_USERS,
    ],
    EDITOR: [
      Permissions.VIEW_FILES,
      Permissions.UPLOAD_FILES,
      Permissions.DELETE_FILES,
      Permissions.CREATE_SESSION,
      Permissions.DELETE_SESSION,
    ],
    VIEWER: [
      Permissions.VIEW_FILES,
    ],
  };