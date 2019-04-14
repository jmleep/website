import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
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
import gitlab from '../../static/gitlab.png';

const Technologies = () => (
  <Grid.Row centered>
    <Card.Group centered>
      <Card>
        <Card.Content>
          <Image src={react} size="medium" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={node} size="medium" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={flask} size="medium" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={java} size="medium" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={nginx} size="small" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={docker} size="medium" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={spring} size="medium" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={webpack} size="medium" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={postgres} size="medium" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={parcel} size="small" rounded />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={gitlab} size="large" rounded />
        </Card.Content>
      </Card>
    </Card.Group>
  </Grid.Row>
);

export default Technologies;
