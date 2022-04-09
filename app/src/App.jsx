import React, { useRef, useState } from 'react'
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'React', body: 'React top' },
    { id: 2, title: 'React', body: 'React top' },
    { id: 3, title: 'React', body: 'React top' }
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //Получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) =>{
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title='Reacts' />
        :
        <h1 style={{ textAlign: 'center' }}>No posts</h1>
      }
    </div >
  );
}

export default App;
