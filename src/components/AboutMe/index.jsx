import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './AboutMe.css';

const AboutMe = () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <h1>Education</h1>
    </div>
    <div className={styles.row}>
      <ul>
        <li>Class of 2013 Mansfield University</li>
        <li>B.S. in Information Systems</li>
      </ul>
    </div>
  </div>
);

export default AboutMe;
