import { IFile } from "./File";

export interface Session {
  id: string;
  name: string;
  files: IFile[];
  createdAt: Date;
  expiresAt: Date;
}
