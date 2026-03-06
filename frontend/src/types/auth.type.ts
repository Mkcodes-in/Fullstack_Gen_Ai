export interface authUser {
    id: string;
    username: string;
    email: string;
}

export interface LoginUserType {
    email: string;
    password: string;
}

export interface registerUserType extends LoginUserType {
    username: string;
}

export type AuthFormType = {
    username: string;
    email: string;
    password: string;
}