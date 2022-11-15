import React from 'react';
import Post from './Post';


const PostContainer: React.FC = (props) => {
    

    return <Post
        key={1} 
        post={{
            userId: 10,
            id: 91,
            title: "aut amet sed",
            body: "libe"} }
        username={'abrabr'}
     />
}

export default PostContainer;