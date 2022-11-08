import styles from "./Post.module.scss";

interface IPropsPost {
    key: number;
    post: {
        userId: number,
        id: number,
        title: string,
        body: string,
    };
}

const Post: React.FC<IPropsPost> = (props) => { 

    

    return <div className={styles.wrapper}>
       <h3>{props.post.title}</h3>
       <p>{props.post.body}</p>
       <p className={styles.author}>Author: {props.post.userId}</p>
    </div>
    }

export default Post;