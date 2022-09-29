import React, { useEffect, useMemo, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal'
import MyButton from '../components/UI/button/MyButton';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetchingPost } from '../hooks/useFetchingPost';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';


function Posts() {
  // All Posts
  const [posts, setPosts] = useState([]);

  // Other Variables
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetchingPost(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // Сортируем Посты, по Заголовку или Описанию
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  // Поикс нужного Поста
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

  // Достаем наши посты, и показываем их
  useEffect(() => {
    fetchPosts();
  }, [page]);

  // Меняем страницу при клике
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <div className='App'>
        <button onClick={fetchPosts}>GET POSTS</button>
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
        {/* Если посты не загрузятся с сервара то показываем ошибку */}
        {
          postError &&
          <h1>Произошла ошибка {postError}</h1>
        }
        {/* Если идет загрузка то показывается LOADER-кружочек */}
        {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSeaechedPost} title='Список Постов' />
        }
        {/* Внизу страницы, переход на todo-lists */}
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}

export default Posts;
