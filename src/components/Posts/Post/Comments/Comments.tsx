import React, { useEffect } from "react";
import styles from "./Comments.module.scss";
import { IComments } from './../../../../types/comments-types';

interface IPropsComments {
    comments: Array<IComments>
}

const Comments: React.FC<IPropsComments> = (props) => { 
    
    useEffect(()=>{
        console.log('render')
    },[props])
    const comments = props.comments.map(comment => <li key={comment.id}><h3>{comment.email}:</h3> {comment.name} <br/><br/> {comment.body}</li>)

    return <div className={styles.wrapper}>
        <ul>
            {comments}
        </ul>
    </div>
                                                            
    
    }

export default React.memo(Comments);