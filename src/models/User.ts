import { Permissions } from "../enums/Permissions";

export interface User {
    id: string;
    username: string;
    name: string;
    permissions: Permissions[];
    email: string;
    createdAt: Date;
    banned: boolean;
  }
  