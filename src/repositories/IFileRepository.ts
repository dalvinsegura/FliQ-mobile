import { IFile } from "../models/File";

export interface IFileRepository {
    uploadFile(file: IFile): Promise<void>;
    downloadFile(fileId: string): Promise<IFile | undefined>;
    deleteFile(fileId: string): Promise<void>;
  }