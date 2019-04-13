import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import sf from '../../static/sf.jpg';
import visionist from '../../static/visionist.jpg';

const WorkHistory = () => (
  <Grid.Row centered>
    <Card.Group centered>
      <Card>
        <Card.Content>
          <Image src={sf} size="medium" rounded centered />
          <Card.Header style={{ paddingTop: '5px' }}>State Farm Insurance</Card.Header>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Image src={visionist} size="medium" rounded centered />
          <Card.Header style={{ paddingTop: '5px' }}>Visionist, Inc.</Card.Header>
        </Card.Content>
      </Card>
    </Card.Group>
  </Grid.Row>
);

export default WorkHistory;
