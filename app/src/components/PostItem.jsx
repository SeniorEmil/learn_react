import React from 'react';
import PropTypes from 'prop-types';
import MyButton from './UI/button/MyButton';
import { useHistory } from 'react-router-dom';

const PostItem = (props) => {
    const router = useHistory()
    console.log(router)
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post-btns">
                <MyButton onClick={() => props.remove(props.post)}>Open</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;