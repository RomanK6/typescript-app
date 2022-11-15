
export enum GoogleActionTypes {
    GOOGLE_OAUTH2 = 'ts-react-app/login/GOOGLE_OAUTH2'
}

export interface ILoginAction {
    type: GoogleActionTypes;
    googleResponse?: [];
}