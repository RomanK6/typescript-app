
export enum UsersAtionTypes {
    GET_ALL_USERS = "ts-react-app/users/GET_ALL_USERS",
    GET_USER = "ts-react-app/users/GET_USER",
    GET_USER_ERROR = "ts-react-app/users/GET_USER_ERROR",
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website?:string;
    company?: {
        name: string;
        catchPrase: string;
        bs: string
    }
}

export interface IUsersAction {
    type: UsersAtionTypes;
    users?: Array<IUser>;
    error?: null | string;
    user?: IUser;
}

export interface IUsersState {
    users: Array<IUser>;
    error: null | string;
}