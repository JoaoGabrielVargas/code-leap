import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectNewPost } from '../slices/postsSlice';
import fetchFromApi from '../services/fetchFromApi';
import BlogpostCard from '../components/BlogpostCard';
import styles from '../styles/Main.module.css';
import CreatePost from '../components/CreatePost';
import DeletePostModal from '../components/DeletePostModal';

function main() {
  const newPost = useSelector(selectNewPost);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchFromApi().then((res) => setPosts(res));
    setIsLoading(false);
  }, [newPost, isDeleteModalOpen]);

  return (
    <div className={styles.container}>
      <DeletePostModal
        isOpen={isDeleteModalOpen}
        setIsOpen={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
      />
      <header>
        <h1>CodeLeap Network</h1>
      </header>
      <CreatePost />
      {
      isLoading ? <h1>Loading posts...</h1>
        : posts.map((el) => (
          <BlogpostCard
            blogPost={el}
            id={el.id}
            key={el.id}
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        ))
      }

    </div>
  );
}

export default main;
