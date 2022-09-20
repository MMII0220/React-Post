import React from 'react';
import MyButton from './UI/button/MyButton';


const PostItem = (props) => {
    return (
        <>
            <article key={props.post.id} className='post'>
                <div className='post__content'>
                    <strong>{props.number}. {props.post.title}</strong>
                    <p>
                        {props.post.description}
                    </p>
                </div>
                <div className='post__btn'>
                    <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
            </article>
        </>
    );
};

export default PostItem;

