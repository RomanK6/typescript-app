import styles from "./Post.module.scss";
//import CommentsContainer from './Comments/CommentsContainer';
import { NavLink } from 'react-router-dom';


interface IPropsPost {
    key: number;
    post: {
        userId: number,
        id: number,
        title: string,
        body: string,
    };
    username: string;
}

const Post: React.FC<IPropsPost> = (props) => { 

    return <div className={styles.wrapper}>
       <h3>{props.post.title}</h3>
       <p>{props.post.body}</p>
       {!!props.username && <p className={styles.author}>Author: {props.username}</p>}
       {/* {<CommentsContainer postId={props.post.id + ""} />} */}
       <NavLink to={`/post/${props.post.id}`} >to post</NavLink>
    </div>
    }

export default Post;