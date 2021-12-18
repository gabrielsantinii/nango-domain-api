export type CreateUserType = ({ email, password }: { email: string; password: string }) => Promise<{ uid: string }>;

export interface AuthAdmin {
    auth: () => { createUser: CreateUserType };
};