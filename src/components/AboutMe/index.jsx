import React from 'react';
import styles from './AboutMe.css';

const AboutMe = () => (
  <div className={styles.container}>
    <div className={styles.column}>
      <h1>Education</h1>
      <ul>
        <li>Class of 2013 Mansfield University</li>
        <br />
        <li>B.S. in Information Systems</li>
        <br />
        <li>Graduated Summa Cum Laude</li>
        <br />
        <li>Academic Honors Award Recipient C.S. Department</li>
      </ul>
    </div>
    <div className={styles.column}>
      <h1>Links</h1>
      <ul>
        <li>
          <a
            href={
              'https://docs.google.com/document/d/1BXwXV2DX21P2d-' +
              'TznAtEpIyolQr4oSrKoo7cqeTDKCE/edit?usp=sharing'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <br />
        <li>
          <a href="https://twitter.com/const_let_var" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <br />
        <li>
          <a href="https://github.com/jmleep" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
        <br />
        <li>
          Favorite Sites
          <ul>
            <br />
            <li>
              <a href="https://chromeunboxed.com/" target="_blank" rel="noopener noreferrer">
                Chrome Unboxed
              </a>
            </li>
            <br />
            <li>
              <a href="https://www.macrumors.com/" target="_blank" rel="noopener noreferrer">
                Mac Rumors
              </a>
            </li>
            <br />
            <li>
              <a href="https://www.androidpolice.com/" target="_blank" rel="noopener noreferrer">
                Android Police
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default AboutMe;
