/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import { Image } from 'semantic-ui-react';
import Canvas from '../Canvas/Canvas';
import me from '../../static/me.jpg';
import styles from './App.css';
import Menu from '../Menu';

document.body.style.margin = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    };
    this.widthRef = React.createRef();
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    console.log(width);
    return (
      <div className={styles.app}>
        <div className={styles.headerContainer} height={300} width={width}>
          <Canvas width={width} height={400} />

          <Image size="medium" src={me} circular centered className={styles.image} />
          <h1 className={styles.header}>Jordan Leeper</h1>
          <h3 className={styles.header}>Full Stack Software Engineer</h3>
        </div>
        <Menu />

        <br />
      </div>
    );
  }
}

export default App;
