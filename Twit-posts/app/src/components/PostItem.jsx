import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate()
    const postAddr = '/posts/' + props.post.id
    
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post-btns">
                <MyButton onClick={() => router(postAddr)}>Open</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;