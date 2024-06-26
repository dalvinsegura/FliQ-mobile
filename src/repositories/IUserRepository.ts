import { User } from "../models/User";

export interface IUserRepository {
    createUser(user: User): Promise<void>;
    getUser(userId: string): Promise<User>;
    updateUser(user: User): Promise<void>;
    deleteUser(userId: string): Promise<void>;
    getUsers(): Promise<User[]>;
    login(username: string, password: string): Promise<User>;
    logout(userId: string): Promise<void>;
    banUser(userId: string): Promise<void>;
    unbanUser(userId: string): Promise<void>;
    
  }