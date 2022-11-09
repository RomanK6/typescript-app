import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { redusersType } from "../../redux/store";
import Profile from './Profile';
import { getUserProfile } from './../../redux/profile-reduser';
import { useParams } from "react-router-dom";
import { IUser } from "../../types/user-types";


interface IProfilePropsContainer {
    getUserProfile: (userId?: string) => {};
    profile: {
        profile: object;
    }
}

const ProfileContainer: React.FC<IProfilePropsContainer> = (props) => {
    const { userId } = useParams()
    useEffect(
        () => {
            props.getUserProfile(userId)
        }, []
    )
    return <Profile profile={props.profile.profile} />
}

const mapStateToProps = (state: redusersType) => {
    return{
        profile: state.profile
    }
}

export default connect( mapStateToProps, { getUserProfile } )(ProfileContainer)