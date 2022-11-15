import React from "react";
import { IPosts } from "../../types/post-types";
import styles from "./Posts.module.scss";
import Post  from './Post/Post';
import { IUser } from "../../types/user-types";
import InfiniteScroll from 'react-infinite-scroll-component';


interface IPropsPosts {
    posts: Array<IPosts>;
    users: Array<IUser>;
    getMorePosts: (posts: Array<IPosts>) => void;
}

const Posts: React.FC<IPropsPosts> = (props) => { 
    
    if (props.users !== undefined && props.posts !== undefined && props.users.length > 0 && props.posts.length > 0) {
        const posts = !!props.posts && props.posts.map(post =>
        <Post 
        key={post.id} 
        post={post} 
        username={props.users[post.userId - 1].username}
        />)
        const fetchData = () => {
            console.log('загруженно постов:' + props.posts.length)
            props.getMorePosts(props.posts)
        }
        const isHasMore = () => {
            return props.posts.length > 120? false : true;
        }
        return <div className={styles.wrapper}>
            <h2>Posts:</h2>
            <InfiniteScroll
                dataLength={props.posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={isHasMore()}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
                >
                {posts}
            </InfiniteScroll>
        </div>
    }
    return <div>loading...</div>
                                                            
    
    }

export default Posts;