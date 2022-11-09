import { IUser } from "./user-types";

export enum ProfileAtionTypes {
    GET_USER_PROFLE = 'ts-react-app/profile/GET_USER_PROFLE',
    GET_PROFILE_ERROR = 'ts-react-app/profile/GET_PROFILE_ERROR',
}

export interface IProfileAction {
    type: ProfileAtionTypes;
    profile: IUser;
    error: null | string;
}