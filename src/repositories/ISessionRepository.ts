import { Session } from "../models/Session";

export interface ISessionRepository {
    createSession(session: Session): Promise<void>;
    getSession(sessionId: string): Promise<Session>;
    deleteSession(sessionId: string): Promise<void>;
    getSessions(): Promise<Session[]>;
    updateSession(session: Session): Promise<void>;
    
  }