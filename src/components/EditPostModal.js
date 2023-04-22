import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/EditPostModal.module.css';
import updatePostRequest from '../services/updatePostInDb';
import { selectNewPost, newPost } from '../slices/postsSlice';

function EditPostModal({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();
  const { id } = useSelector(selectNewPost);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleEdit = () => {
    dispatch(newPost({ title, content, id }));
    updatePostRequest(id, title, content).then(setIsOpen);
  };
  if (isOpen) {
    return (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <h1>Edit item</h1>
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
          <div className={styles.buttons}>
            <button type="button" onClick={setIsOpen}>Cancel</button>
            <button type="button" onClick={handleEdit} disabled={!content || !title}>Save</button>
          </div>
        </div>

      </div>
    );
  }
  return null;
}

EditPostModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}.isRequired;

export default EditPostModal;
