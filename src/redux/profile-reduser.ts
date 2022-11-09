import axios from "axios";
import { Dispatch } from "redux";
import { IProfileAction, ProfileAtionTypes } from "../types/profile-types";

const initialState = {
    profile: {},
    error: null,
}

const profileReducer = (state = initialState, action: IProfileAction) => {
    switch(action.type) {
        case ProfileAtionTypes.GET_USER_PROFLE:
            return {
                ...state,
                profile: action.profile,
            }
        case ProfileAtionTypes.GET_PROFILE_ERROR:
            return {
                error: action.error
            }
        default: return {...state};
    }
}

export const getUserProfile = (userId?: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response =await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            dispatch({type: ProfileAtionTypes.GET_USER_PROFLE, profile: response.data})
        } catch (error) {
            dispatch({
                type: ProfileAtionTypes.GET_PROFILE_ERROR, 
                error: "Произошла ошибка при загрузке пользователей"
            })
        }
    }
}

export default profileReducer;