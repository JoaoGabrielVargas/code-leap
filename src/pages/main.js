import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectNewPost } from '../slices/postsSlice';
import fetchFromApi from '../services/fetchFromApi';
import BlogpostCard from '../components/BlogpostCard';
import styles from '../styles/Main.module.css';
import CreatePost from '../components/CreatePost';

function main() {
  const newPost = useSelector(selectNewPost);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFromApi().then((res) => setPosts(res));
    setIsLoading(false);
  }, [newPost]);

  return (
    <div className={styles.container}>
      <header>
        <h1>CodeLeap Network</h1>
      </header>
      <CreatePost />
      {
      isLoading ? <h1>Loading posts...</h1>
        : posts.map((el) => <BlogpostCard blogPost={el} key={el.id} />)
      }
    </div>
  );
}

export default main;
