import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header/Header.css';

export default function Header({ title }) {
  return (
    <header>
      <span className={styles.title}>{title}</span>
      <Link className={styles.link} to={'/'}>
        Home
      </Link>
    </header>
  );
}
