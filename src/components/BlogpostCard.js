/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
/* import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice'; */
import styles from '../styles/BlogpostCard.module.css';
import timeAgo from '../utils/formatDate';

function BlogpostCard({ blogPost }) {
/*   const { username } = useSelector(selectUser);
 */ const {
    username, created_datetime, title, content,
  } = blogPost;

  const dateTimeAgo = timeAgo(created_datetime);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          {title}
        </h1>
      </div>
      <div className={styles.namedivcontainer}>
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
  blogPost: PropTypes.shape({
    username: PropTypes.string,
    title: PropTypes.string,
    created_datetime: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,

};

export default BlogpostCard;
