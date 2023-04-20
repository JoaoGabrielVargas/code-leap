import React, { useEffect, useState } from 'react';
import fetchFromApi from '../services/fetchFromApi';

function main() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchFromApi().then((res) => setPosts(res));
  }, []);

  return (
    <div>
      {posts.map((el) => (
        <div>
          <p>{el.username}</p>
          <p>{el.created_datetime}</p>
          <p>{el.title}</p>
          <p>{el.content}</p>
        </div>

      ))}
    </div>
  );
}

export default main;
