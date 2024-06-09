import React from 'react';
import { Link } from "react-router-dom";
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.home}>
            <h1>Welcome to the Home Page</h1>
            <Link to="/articles" className={styles.link}>Go to Articles</Link>
        </div>
    );
}

export default Home;