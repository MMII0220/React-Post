import React, { useMemo, useState } from 'react';
// import Counter from './compontns/Counter';
// import PostItem from './compontns/PostItem';
import PostList from './compontns/PostList';
import PostForm from './compontns/PostForm';
import './styles/App.css';
import MySelect from './compontns/UI/select/MySelect';
import MyInput from './compontns/UI/input/MyInput';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', description:'For Web sites'},
    {id: 2, title: 'CSS', description:'For decoration web pages'},
    {id: 3, title: 'HTML', description:'For visualising web pages'},
    {id: 4, title: 'Node.js', description:'For backend'},
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  // Поиск по постов
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  // Сортируем и находим нужный пост
  const sortedAndSeaechedPost = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery) );
  }, [searchQuery, sortedPosts]);

  // Создаем Пост
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Удаляем нужный пост
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  // Сортируем посты
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  

  return (
    <>
      <div className='App'>
        <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}} />
        <div>
          <MyInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск..."
          />
          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка"
            options={[
              {value: 'title', name: 'по названию'},
              {value: 'description', name: 'по описанию'}
            ]}
          />
        </div>
        {sortedAndSeaechedPost.length === 0 ?
          <p className='decor'>Посты не найдены</p> :
          <PostList remove={removePost} posts={sortedAndSeaechedPost} title='Список Постов' />
        }
      </div>
    </>
  );
}

export default App;

