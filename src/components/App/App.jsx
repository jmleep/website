import React from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';
import me from '../../static/me.jpg';
import styles from './App.css';
import Menu from '../Menu';

document.body.style.margin = 0;

const App = () => (
  <div className={styles.app}>
    <br />
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Image size="medium" src={me} circular centered />
          <Header as="h1" icon textAlign="center">
            <Header.Content>Jordan Leeper</Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Menu />
    </Grid>
    <br />
  </div>
);

export default App;
