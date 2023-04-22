import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from '../styles/DeletePostModal.module.css';
import deletePostRequest from '../services/deletePostInDb';
import { selectNewPost } from '../slices/postsSlice';

function DeletePostModal({ isOpen, setIsOpen }) {
  const { id } = useSelector(selectNewPost);

  const handleDelete = () => {
    deletePostRequest(id).then(setIsOpen);
  };
  if (isOpen) {
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <h1>Are you sure you want to delete this item?</h1>
          <div className={styles.buttons}>
            <button type="button" onClick={setIsOpen}> Cancel </button>
            <button type="button" onClick={handleDelete}> Delete </button>
          </div>
        </div>

      </div>
    );
  }
  return null;
}

DeletePostModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}.isRequired;

export default DeletePostModal;
