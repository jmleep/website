import React from 'react';
import react from '../../static/react2.png';
import node from '../../static/node.png';
import nginx from '../../static/nginx.png';
import java from '../../static/java.png';
import docker from '../../static/docker.png';
import flask from '../../static/flask.png';
import spring from '../../static/spring.png';
import webpack from '../../static/webpack.png';
import parcel from '../../static/parcel.png';
import postgres from '../../static/postgres.png';
import gitlab from '../../static/gitlab.jpg';
import html5 from '../../static/html5.png';
import yarn from '../../static/yarn.png';
import styles from './Technologies.css';

const Technologies = () => {
  const imgs = [
    <img className={styles.img} src={react} alt="React" height={200} width={300} />,
    <img className={styles.img} src={node} alt="Node" height={200} width={300} />,
    <img className={styles.img} src={webpack} alt="Webpack" height={200} width={300} />,
    <img className={styles.img} src={java} alt="Java" height={200} width={300} />,
    <img className={styles.img} src={nginx} alt="NGINX" height={200} width={200} />,
    <img className={styles.img} src={docker} alt="Docker" height={200} width={250} />,
    <img className={styles.img} src={spring} alt="Spring Framework" height={200} width={250} />,
    <img className={styles.img} src={html5} alt="HTML5" height={200} width={200} />,
    <img className={styles.img} src={flask} alt="Flask" height={200} width={300} />,
    <img className={styles.img} src={postgres} alt="Postgres" height={200} width={300} />,
    <img className={styles.img} src={parcel} alt="Parceljs" height={200} width={200} />,
    <img className={styles.img} src={gitlab} alt="Gitlab" height={200} width={400} />,
    <img className={styles.img} src={yarn} alt="Yarn" height={150} width={300} />
  ];

  return <div className={styles.tech}>{imgs.map(image => image)}</div>;
};

export default Technologies;
