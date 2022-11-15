
export enum CommentsAtionTypes {
    GET_COMMENTS_BY_POST_ID = 'ts-react-app/comments/GET_COMMENTS_BY_POST_ID',
    GET_COMMENTS_ERROR = 'ts-react-app/comments/GET_COMMENTS_ERROR',
    GET_ALL_COMMENTS = 'ts-react-app/comments/GET_ALL_COMMENTS',
}

export interface IComments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface ICommentsState {
    comments: {
        comments: Array<IComments>,
        error: null | string,
    }
}

export interface ICommentsAction {
    type: CommentsAtionTypes,
    error: null | string,
    comments?: Array<IComments>,
}