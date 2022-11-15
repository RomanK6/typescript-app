import axios from "axios";
import { Dispatch } from "redux";
import { PostsAtionTypes, IPostsState, IPostAction, IPosts } from "../types/post-types";

const initialState: IPostsState = {
    posts: [
        //  {
        //  "userId": 1,
        //  "id": 1,
        //  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        //  }
    ],
    loading: false,
    error: null,
}

const postsReducer = (state = initialState, action: IPostAction) => {
    switch(action.type) {
        case PostsAtionTypes.GET_MORE_POSTS:
            return {
                ...state, 
                posts: action.posts
            }
        case PostsAtionTypes.GET_POST_ONE_USER:
            return {
                ...state,
                loading: false,
                error: null, 
                posts: action.posts
            }
        case PostsAtionTypes.GET_ALL_POSTS:
            return {
                loading: true, 
                error: null, 
            }
        case PostsAtionTypes.GET_ALL_POSTS_SUCCES:
            return {
                ...state,
                loading: false,
                error: null, 
                posts: action.posts
            }
        case PostsAtionTypes.GET_POSTS_ERROR:
            return {
                loading: false,
                error: action.error,
            }
        default: return {...state};
    }
}

export const getPostsOneUser = (userId?: string) => {
    return async (dispatch: Dispatch<IPostAction>) => {
        try {
            const response =await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            dispatch({type: PostsAtionTypes.GET_POST_ONE_USER, posts: response.data})
        } catch (error) {
            dispatch({
                type: PostsAtionTypes.GET_POSTS_ERROR, 
                error: "Произошла ошибка при загрузке пользователей"
            })
        }
    }
}

export const getPosts = () => {
    return async (dispatch: Dispatch<IPostAction>) => {
        try {
            dispatch({type: PostsAtionTypes.GET_ALL_POSTS})
            const response =await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({type: PostsAtionTypes.GET_ALL_POSTS_SUCCES, posts: response.data})
        } catch (error) {
            dispatch({
                type: PostsAtionTypes.GET_POSTS_ERROR, 
                error: "Произошла ошибка при загрузке пользователей"
            })
        }
    }
}

export const getMorePosts = (posts: Array<IPosts>) => {
    return async (dispatch: Dispatch<IPostAction>) => {
        try {
            dispatch({type: PostsAtionTypes.GET_MORE_POSTS, posts: [...posts, {userId: 10, id: 101, title: 'last post', body: 'last post body'}]})
        } catch (error) {
            dispatch({
                type: PostsAtionTypes.GET_POSTS_ERROR, 
                error: "Произошла ошибка при загрузке пользователей"
            })
        }
    }
}

export default postsReducer;