/* eslint-disable camelcase */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaPenSquare, FaTrashAlt } from 'react-icons/fa';
import styles from '../styles/BlogpostCard.module.css';
import timeAgo from '../utils/formatDate';
import { selectUser } from '../slices/userSlice';
import ConfigIcon from './iconContext';
import { getId } from '../slices/postsSlice';

function BlogpostCard({
  blogPost, isDeleteModalOpen, setIsDeleteModalOpen, isEditModalOpen, setIsEditModalOpen,
}) {
  const {
    username, created_datetime, title, content, id,
  } = blogPost;
  const dispatch = useDispatch();

  const deletePost = async () => {
    dispatch(getId({ id }));
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const editPost = () => {
    dispatch(getId({ id }));
    setIsEditModalOpen(!isEditModalOpen);
  };

  const { name } = useSelector(selectUser);

  const dateTimeAgo = timeAgo(created_datetime);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          {title}
        </h1>
        {username === name && (
        <div className={styles.icons}>
          <ConfigIcon>
            <button type="button" onClick={deletePost}>
              <FaTrashAlt />
            </button>
            <button type="button" onClick={editPost}>
              <FaPenSquare />
            </button>
          </ConfigIcon>
        </div>
        )}
      </div>
      <div className={styles.name_container}>
        <span>
          {`@${username}`}
        </span>
        <p className={styles.date}>
          {dateTimeAgo}
        </p>
      </div>
      <p className={styles.content}>
        {content}
      </p>
    </div>
  );
}

BlogpostCard.propTypes = {
  isEditModalOpen: PropTypes.bool.isRequired,
  setIsEditModalOpen: PropTypes.func.isRequired,
  isDeleteModalOpen: PropTypes.bool.isRequired,
  setIsDeleteModalOpen: PropTypes.func.isRequired,
  blogPost: PropTypes.shape({
    username: PropTypes.string,
    title: PropTypes.string,
    created_datetime: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default BlogpostCard;
