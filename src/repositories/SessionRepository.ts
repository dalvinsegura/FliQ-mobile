import { Session } from "../models/Session";
import { ISessionRepository } from "./ISessionRepository";

export const SessionRepository: ISessionRepository = {
    createSession: async (session: Session): Promise<void> => {
        // Create session
    },
    getSession: async (sessionId: string): Promise<Session> => {
        // Get session
        return {
        id: 'session-id',
        name: 'session-name',
        files: [],
        createdAt: new Date(),
        expiresAt: new Date(),
        };
    },
    deleteSession: async (sessionId: string): Promise<void> => {
        // Delete session
    },
    getSessions: async (): Promise<Session[]> => {
        // Get sessions
        return [
        {
            id: 'session-id',
            name: 'session-name',
            files: [],
            createdAt: new Date(),
            expiresAt: new Date(),
        },
        ];
    },
    updateSession: async (session: Session): Promise<void> => {
        // Update session
    },
};