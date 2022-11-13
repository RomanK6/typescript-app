import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { redusersType } from "../../../../redux/store";
import Comments from './Comments';
import { getCommentsByPostId } from './../../../../redux/comments-reducer';
import { IComments } from './../../../../types/comments-types';

//Типизация пропсов под connect
interface IPostsCommentsContainer {
    comments: {
        comments: Array<IComments>
    };
    getCommentsByPostId: (postId?: string) => {};
    postId: string;
}

const CommentsContainer: React.FC<IPostsCommentsContainer> = (props) => {
    useEffect(() => {
        props.getCommentsByPostId(props.postId)
    }, [])

    return <div>
        <Comments comments={props.comments.comments} />
    </div>
    }

const mapSteteToProps = (state: redusersType) => {
    return {
        comments: state.comments,
    }
}

export default connect(mapSteteToProps, { getCommentsByPostId })(CommentsContainer);