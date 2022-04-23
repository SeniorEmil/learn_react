import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useFetching } from './../hooks/useFething';
import PostService from './../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comment, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    console.log(comment)

    return (
        <div>
            <h1>Стр поста {params.id}</h1>
            {isLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><MyLoader /></div>
                : <div>{post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            <div>
                {isComLoading
                    ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><MyLoader /></div>
                    : <div>{
                        comment.map((comm, index) =>
                            <div key={comm.id} style={{marginTop: 15}}>
                                <h3>{comm.email}</h3>
                                {comm.body}
                            </div>
                        )
                    }
                    </div>
                }

            </div>
        </div>
    );
};

export default PostIdPage;