import React, { useEffect, useMemo, useRef, useState } from 'react'
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';


import './styles/App.css';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import MyLoader from './components/UI/loader/MyLoader';
import { useFetching } from './hooks/useFething';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
    console.log("first")
    fetchPosts()
  }, [])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  //Получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <button onClick={fetchPosts}>Get Posts</button>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><MyLoader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Reacts' />
      }

    </div >
  );
}

export default App;
