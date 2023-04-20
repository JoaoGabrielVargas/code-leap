import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';
import { changeUser } from '../slices/userSlice';

export default function Home() {
  const { push } = useRouter();
  const [userName, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeUser(userName));
    push('/main');
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1> Welcome to CodeLeap network!</h1>
        <span>Please enter your username</span>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button type="button" className={styles.button} disabled={!userName} onClick={handleClick}>ENTER</button>
      </div>
    </div>
  );
}
