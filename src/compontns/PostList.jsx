import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <h1 className='decor'>Посты не найдены</h1>
        );
    }

    return (
        <>
            <div>
                <h1 style={{textAlign: 'center'}}>{title}</h1>
                {posts.map((post, index) =>
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
                )}
            </div>
        </>
    );
};
// <PostItem post={post} title='Список Постов' key={post.id} />
export default PostList;
