import React from "react";
import { IPosts } from "../../types/post-types";
import styles from "./Posts.module.scss";
import Post from './Post/Post';
import { IUser } from "../../types/user-types";


interface IPropsPosts {
    posts?: Array<IPosts>;
    users: Array<IUser>;
}

const Posts: React.FC<IPropsPosts> = (props) => { 
    
    if (props.users.length > 0) {
        const posts = !!props.posts && props.posts.map(post => 
        <Post 
        key={post.id} 
        post={post} 
        username={props.users[post.userId - 1].username}
        />)
        return <div className={styles.wrapper}>
            <h2>Posts:</h2>
            {!!props.posts ? posts : "loading..."}
        </div>
    }
    return <div>loading...</div>
                                                            
    
    }

export default Posts;