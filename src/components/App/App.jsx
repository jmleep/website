/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import Canvas from '../Canvas/Canvas';
import me from '../../static/me.jpg';
import styles from './App.css';
import Menu from '../Menu';

document.body.style.margin = 0;

class App extends React.Component {
  state = {
    width: null
  };

  componentDidMount() {
    this.setState({
      width: window.innerWidth
    });
  }

  widthRef = React.createRef();

  render() {
    const { width } = this.state;

    return (
      <div className={styles.app}>
        <div height={300} width={width}>
          <Canvas width={width} height={400} />

          <Image size="medium" src={me} circular centered />
          <Header as="h1" icon textAlign="center" style={{ fontFamily: 'Ubuntu' }}>
            <Header.Content>Jordan Leeper</Header.Content>
          </Header>
          <Header as="h3" textAlign="center" style={{ fontFamily: 'Ubuntu' }}>
            Full Stack Software Engineer
          </Header>
        </div>
        <Menu />

        <br />
      </div>
    );
  }
}

export default App;
