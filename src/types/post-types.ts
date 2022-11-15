export enum PostsAtionTypes {
    GET_ALL_POSTS = 'ts-react-app/posts/GET_ALL_POSTS',
    GET_ALL_POSTS_SUCCES = 'ts-react-app/posts/GET_ALL_POSTS_SUCCES',
    GET_POSTS_ERROR = 'ts-react-app/posts/GET_POSTS_ERROR',
    GET_POST_ONE_USER = 'ts-react-app/posts/GET_POST_ONE_USER',
    GET_MORE_POSTS = 'ts-react-app/posts/GET_MORE_POSTS',
}
export interface IPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface IPostsState {
    posts: Array<IPosts>;
    loading: boolean;
    error: null | string;
}
export interface IPostAction {
    type: PostsAtionTypes;
    posts?: Array<IPosts>;
    error?: null | string;
}