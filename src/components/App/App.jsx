import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import me from '../../static/me.jpg';
import styles from './App.css';

document.body.style.margin = 0;

const App = () => (
  <div className={styles.app}>
    <br />
    <Image size="medium" src={me} circular centered />
    <Header as="h1" icon textAlign="center">
      <Header.Content>Jordan Leeper</Header.Content>
    </Header>
    <br />
  </div>
);

export default App;
