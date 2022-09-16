import React, { useMemo, useState } from 'react';
// import Counter from './compontns/Counter';
// import PostItem from './compontns/PostItem';
import PostList from './compontns/PostList';
import PostForm from './compontns/PostForm';
import './styles/App.css';
// import MySelect from './compontns/UI/select/MySelect';
// import MyInput from './compontns/UI/input/MyInput';
import PostFilter from './compontns/PostFilter';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', description:'For Web sites'},
    {id: 2, title: 'CSS', description:'For decoration web pages'},
    {id: 3, title: 'HTML', description:'For visualising web pages'},
    {id: 4, title: 'Node.js', description:'For backend'},
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  // Сортируем и находим нужный пост
  const sortedAndSeaechedPost = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()) );
  }, [filter.query, sortedPosts]);

  // Создаем Пост
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Удаляем нужный пост
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };


  return (
    <>
      <div className='App'>
        <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}} />
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {sortedAndSeaechedPost.length === 0 ?
          <p className='decor'>Посты не найдены</p> :
          <PostList remove={removePost} posts={sortedAndSeaechedPost} title='Список Постов' />
        }
      </div>
    </>
  );
}

export default App;

