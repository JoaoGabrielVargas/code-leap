import React, { useEffect, useState } from 'react';
import fetchFromApi from '../services/fetchFromApi';
import BlogpostCard from '../components/BlogpostCard';
import styles from '../styles/Main.module.css';

function main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchFromApi().then((res) => setPosts(res));
  }, []);

  return (
    <div className={styles.container}>
      {posts.map((el) => <BlogpostCard blogPost={el} />)}
    </div>
  );
}

export default main;
