import axios from "axios";
import { Dispatch } from "redux";
import { IUsersState, IUsersAction, UsersAtionTypes } from "../types/user-types";

const initialState: IUsersState = {
    users: [],
    error: null,
}

const usersReducer = (state = initialState, action: IUsersAction) => {
    switch(action.type) {
        case UsersAtionTypes.GET_USER:
            return {
                ...state,

            }
        case UsersAtionTypes.GET_ALL_USERS:
             return {...state, users: action.users}
        case UsersAtionTypes.GET_USER_ERROR:
            return {
                error: action.error
            }
        default: return {...state};
    }
}

export const getUser = (userId: number) => {
    return async (dispatch: Dispatch<IUsersAction>) => {
        try {
            const response =await axios.get(`https://jsonplaceholder.typicode.com/users${userId}`)
            dispatch({type: UsersAtionTypes.GET_USER, users: response.data})
        } catch (error) {
            dispatch({
                type: UsersAtionTypes.GET_USER_ERROR, 
                error: "Произошла ошибка при загрузке пользователей"
            })
        }
    }
}


export const getAllUsers = () => {
    return async (dispatch: Dispatch<IUsersAction>) => {
        try {
            const response =await axios.get(`https://jsonplaceholder.typicode.com/users`)
            dispatch({type: UsersAtionTypes.GET_ALL_USERS, users: response.data})
        } catch (error) {
            dispatch({
                type: UsersAtionTypes.GET_USER_ERROR, 
                error: "Произошла ошибка при загрузке пользователей"
            })
        }
    }
}

export default usersReducer;