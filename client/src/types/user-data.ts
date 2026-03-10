export type UserData = {
    name: string;
    username?: string; 
    avatarUrl: string;
    isPro: boolean;
    email: string;
    token: string;
};

export type AuthData = {
    email: string;
    password: string;
};