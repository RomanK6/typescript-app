import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { redusersType } from "../../redux/store";
import Users from './Users';
import { getAllUsers } from '../../redux/user-reducer';

//Типизация пропсов под connect
interface IUsersPropsContainer {
    users: redusersType;
    getAllUsers: () => {};
}

const UsersContainer: React.FC<IUsersPropsContainer> = (props) => {
    useEffect(() => {
        props.getAllUsers()
    }, [])

    return <div>
        <Users users={props.users.users} />
    </div>
    }

const mapSteteToProps = (state: redusersType) => {
    return {
        users: state.users,
    }
}

export default connect(mapSteteToProps, { getAllUsers })(UsersContainer);