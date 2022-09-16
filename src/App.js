import React, { useMemo, useState } from 'react';
// import Counter from './compontns/Counter';
// import PostItem from './compontns/PostItem';
import PostList from './compontns/PostList';
import PostForm from './compontns/PostForm';
import './styles/App.css';
// import MySelect from './compontns/UI/select/MySelect';
// import MyInput from './compontns/UI/input/MyInput';
import PostFilter from './compontns/PostFilter';
import MyModal from './compontns/UI/MyModal/MyModal';
import MyButton from './compontns/UI/button/MyButton';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', description:'For Web sites'},
    {id: 2, title: 'CSS', description:'For decoration web pages'},
    {id: 3, title: 'HTML', description:'For visualising web pages'},
    {id: 4, title: 'Node.js', description:'For backend'},
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

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
    setModal(false);
  };

  // Удаляем нужный пост
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };


  return (
    <>
      <div className='App'>
        <MyButton style={{marginTop: '3%'}} onClick={() => setModal(true)}>
          Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>
        <hr style={{margin: '15px 0'}} />
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSeaechedPost} title='Список Постов' />
      </div>
    </>
  );
}

export default App;

