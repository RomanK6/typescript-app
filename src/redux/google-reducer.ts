import { Dispatch } from "redux";
import { GoogleActionTypes, ILoginAction } from "../types/login-types";




const initialState: object = []

export const googleReducer = (state = initialState, action: ILoginAction) => {
    switch (action.type) {
        case GoogleActionTypes.GOOGLE_OAUTH2:
            return action.googleResponse;
        default: return state;
    }
}

export const googleOAuth2 = (googleResponse?: []) => {
    return async (dispatch: Dispatch<ILoginAction>) => {
        if (typeof googleResponse === 'undefined') {
            googleResponse = []
        }
        dispatch({type: GoogleActionTypes.GOOGLE_OAUTH2, googleResponse})
    }
}
