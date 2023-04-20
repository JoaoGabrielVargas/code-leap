import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import postIndatabase from '../services/postInDatabase';
import styles from '../styles/createPost.module.css';
import { newPost } from '../slices/postsSlice';

function CreatePost() {
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleClick = () => {
    postIndatabase(title, username, content);
    dispatch(newPost({ title, content }));
    setTitle('');
    setContent('');
  };
  return (
    <div className={styles.container}>
      <h1>What&apos;s on your mind?</h1>
      <div className={styles.title_container}>
        <span>Title</span>
        <input value={title || ''} type="text" className={styles.title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.title_container}>
        <span>Content</span>
        <textarea
          value={content || ''}
          className={styles.content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleClick} disabled={!content || !title}>Create</button>
    </div>
  );
}

export default CreatePost;
