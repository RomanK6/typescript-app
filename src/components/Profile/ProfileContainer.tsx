import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { redusersType } from "../../redux/store";
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { useParams } from "react-router-dom";
import { IUser } from "../../types/user-types";
import { getPostsOneUser } from '../../redux/posts-reducer';
import { IPostsState } from './../../types/post-types';


interface IProfilePropsContainer {
    getUserProfile: (userId?: string) => {};
    getPostsOneUser: (userId?: string) => {};
    profile: {
        profile: IUser;
    }
    posts: IPostsState;
}

const ProfileContainer: React.FC<IProfilePropsContainer> = (props) => {
    const { userId } = useParams()
    useEffect(
        () => {
            props.getUserProfile(userId)
            props.getPostsOneUser(userId)
        }, []
    )
    return <Profile profile={props.profile.profile} posts={props.posts}/>
}

const mapStateToProps = (state: redusersType) => {
    return{
        profile: state.profile,
        posts: state.posts,
    }
}

export default connect( mapStateToProps, { getUserProfile, getPostsOneUser } )(ProfileContainer)