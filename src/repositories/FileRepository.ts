import { IFile } from "../models/File";
import { IFileRepository } from "./IFileRepository";

export const FileRepository: IFileRepository = {
    uploadFile: async (file: IFile): Promise<void> => {
        //upload file to server
    },
    downloadFile: async (fileId: string): Promise<IFile> => {
        //download file from server
        // return {
        //     id: "1",
        //     name: "file1",
        //     uri: "http://file1.com",
        //     type: "image/jpeg"

        // }
    },

    deleteFile: async (fileId: string): Promise<void> => {
        //delete file from server
    },

};