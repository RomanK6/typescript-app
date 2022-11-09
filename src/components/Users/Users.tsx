import React from "react";
import styles from "./Users.module.scss";
import User from './User/User';
import { IUser } from "../../types/user-types";


interface IPropsPosts {
    users: Array<IUser>;
}

const Posts: React.FC<IPropsPosts> = (props) => { 
    
    
    const posts = !!props.users && props.users.map(user => 
    <User 
    key={user.id} 
    user={user}
    />)
    return <div className={styles.wrapper}>
        <h2>Users:</h2>
        {!!props.users ? posts : "loading..."}
    </div>
    
    }

export default Posts;