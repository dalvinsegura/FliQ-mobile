import { IUserRepository } from "./IUserRepository";
import {User} from "../models/User";

export const UserRepository: IUserRepository = {
    createUser: async (user: User): Promise<void> => {
        // Create user
    },
    getUser: async (userId: string): Promise<User> => {
        // Get user
        return {
            id: 'user-id',
            username: 'user-username',
            name: 'user-name',
            permissions: [],
            email: 'user-email',
            createdAt: new Date(),
            banned: false,
        };
    },
    updateUser: async (user: User): Promise<void> => {
        // Update user
    },
    deleteUser: async (userId: string): Promise<void> => {
        // Delete user
    },
    getUsers: async (): Promise<User[]> => {
        // Get users
        return [
            {
                id: 'user-id',
                username: 'user-username',
                name: 'user-name',
                permissions: [],
                email: 'user-email',
                createdAt: new Date(),
                banned: false,
            },
        ];
    },
    login: async (username: string, password: string): Promise<User> => {
        // Login user
        return {
            id: 'user-id',
            username: 'user-username',
            name: 'user-name',
            permissions: [],
            email: 'user-email',
            createdAt: new Date(),
            banned: false,
        };
    },
    logout: async (userId: string): Promise<void> => {
        // Logout user
    },
    banUser: async (userId: string): Promise<void> => {
        // Ban user
    },
    unbanUser: async (userId: string): Promise<void> => {
        // Unban user
    },
};