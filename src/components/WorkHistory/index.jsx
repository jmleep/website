import React from 'react';
import { Card, Image, Grid, Modal, Header } from 'semantic-ui-react';
import sf from '../../static/sf.jpg';
import visionist from '../../static/visionist.jpg';

const sfCard = (
  <Card>
    <Card.Content>
      <Image src={sf} size="medium" rounded centered />
      <Card.Header style={{ paddingTop: '5px' }}>State Farm Insurance</Card.Header>
    </Card.Content>
  </Card>
);

const visCard = (
  <Card>
    <Card.Content>
      <Image src={visionist} size="medium" rounded centered />
      <Card.Header style={{ paddingTop: '5px' }}>Visionist, Inc.</Card.Header>
    </Card.Content>
  </Card>
);

const WorkHistory = () => (
  <Grid.Row centered>
    <Card.Group centered>
      <Modal trigger={sfCard}>
        <Modal.Header>State Farm Insurance</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={sf} />
          <Modal.Description>
            <Header as="h2">Software Engineer</Header>
            <Header as="h3">2013 - 2018</Header>
            <p>- Built web services and applications using Java/Spring/PostgreSQL</p>
            <p>- Built APIs and SPAs using Docker Swarm, Node, Express, React, and PostgreSQL</p>
            <p>- Built LDAP integrations with Java and Passport.js</p>
            <p>- Git version control</p>
            <p>- Built Gitlab CI/CD pipelines using Dockerized Runners</p>
            <p>- Acted as mentor, team lead, code reviewer for multiple teams</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      <Modal trigger={visCard}>
        <Modal.Header>Visionist, Inc</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={visionist} />
          <Modal.Description>
            <Header as="h2">Software Engineer</Header>
            <Header as="h3">2018 - Present</Header>
            <p>
              - Built React Component library for data visualization using HTML Canvas, SVG, d3.js,
              Rollup, and Webpack
            </p>
            <p>- Built React applications using antd, blueprint, and custom component styling</p>
            <p>- Built Gitlab CI/CD pipeline deployed to AWS EC2</p>
            <p>- Enabled mobile web optimization of React application</p>
            <p>- Enabled XML transformation via Java And Nifi</p>
            <p>- Built Python web service using Flask</p>
            <p>- Containerized applications and nginx proxying experience</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Card.Group>
  </Grid.Row>
);

export default WorkHistory;
