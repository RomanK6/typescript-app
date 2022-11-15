import axios from "axios";
import { Dispatch } from "redux";
import { CommentsAtionTypes, ICommentsAction } from "../types/comments-types";

const initialState = {
    comments: [],
    error: null,
}

const commentsReducer = (state = initialState, action: ICommentsAction) => {
    switch(action.type) {
        case CommentsAtionTypes.GET_ALL_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case CommentsAtionTypes.GET_COMMENTS_BY_POST_ID:
            return {
                ...state,
                comments: action.comments
            }
        case CommentsAtionTypes.GET_COMMENTS_ERROR:
            return {
                error: action.error
            }
        default: return {...state};
    }
}

export const getCommentsByPostId = (postId?: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response =await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            dispatch({type: CommentsAtionTypes.GET_COMMENTS_BY_POST_ID, comments: response.data})
        } catch (error) {
            dispatch({
                type: CommentsAtionTypes.GET_COMMENTS_ERROR, 
                error: "Произошла ошибка при загрузке пользователей"
            })
        }
    }
}

export const getAllComments = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response =await axios.get(`https://jsonplaceholder.typicode.com/comments`)
            dispatch({type: CommentsAtionTypes.GET_ALL_COMMENTS, comments: response.data})
        } catch (error) {
            dispatch({
                type: CommentsAtionTypes.GET_COMMENTS_ERROR, 
                error: "Произошла ошибка при загрузке пользователей"
            })
        }
    }
}

export default commentsReducer;