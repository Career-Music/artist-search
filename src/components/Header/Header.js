import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header/Header.css';
import PropTypes from 'prop-types';

export default function Header({ title }) {
  return (
    <header>
      <div className={ styles.title }>{ title }</div>
      <Link className={ styles.link } to={ '/' }>
        Home
      </Link>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
