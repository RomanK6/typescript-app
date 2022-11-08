import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { redusersType } from "../../redux/store";
import Posts from './Posts';
import { getPosts } from './../../redux/posts-reducer';
import { getAllUsers } from './../../redux/user-reduser';

//Типизация пропсов под connect
interface IPostsPropsContainer {
    posts: redusersType;
    users: redusersType;
    getPosts: () => {};
    getAllUsers: () => {};
}

const PostsContainer: React.FC<IPostsPropsContainer> = (props) => {
    useEffect(() => {
        props.getPosts()
        props.getAllUsers()
    }, [])

    return <div>
        <Posts posts={props.posts.posts} users={props.users.users} />
    </div>
    }

const mapSteteToProps = (state: redusersType) => {
    return {
        posts: state.posts,
        users: state.users,
    }
}

export default connect(mapSteteToProps, { getPosts, getAllUsers })(PostsContainer);