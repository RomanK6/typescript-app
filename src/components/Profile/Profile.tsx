import styles from "./Profile.module.scss";
import { IUser } from "../../types/user-types";
import { IPostsState } from './../../types/post-types';
import Post from "../Posts/Post/Post";


interface IProfileProps {
    profile: IUser;
    posts: IPostsState;
}

const Profile: React.FC<IProfileProps> = (props) => {
    
    const posts = props.posts.posts.map(post => <Post 
        key={post.id} 
        post={post} 
        username=''
        />)

    return <div className={styles.wrapper}>
        <img src="https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg" alt="avatar" />
        <div className={styles.profile}>
            <h4>{props.profile.username}</h4>
            <p>email: <a>{props.profile.email}</a></p>
            <p>phone: <a href={"tel:"+props.profile.phone}>{props.profile.phone}</a></p>
            <p>website: <a href={"tel:"+props.profile.website}>{props.profile.website}</a></p>
        </div>
        <div className={styles.posts}>
            {posts}
        </div>
        

    </div>
}

export default Profile;