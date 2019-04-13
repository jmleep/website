import React from 'react';
import { Item } from 'semantic-ui-react';
import android from '../../static/android.png';
import react from '../../static/react.png';
import website from '../../static/website.jpg';

const Projects = () => (
  <div style={{ paddingLeft: '50px' }}>
    <Item.Group divided>
      <Item>
        <Item.Image src={website} size="small" />
        <Item.Content verticalAlign="middle">
          <a href="https://github.com/jmleep/website" target="_blank" rel="noopener noreferrer">
            <Item.Header as="h2">Personal Website</Item.Header>
          </a>
          <Item.Meta content="React - ES6+ - Babel - Parceljs - NGINX - Docker" />
          <Item.Description>
            The website you're using right now! The site was built with ES6, React and the Parceljs
            bundler. It is minified, transpiled, and injected into an NGINX docker container. An
            additional NGINX container is used to route traffic to the website or to the container
            which serves the website's certificates.
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Image src={react} size="small" />
        <Item.Content verticalAlign="middle">
          <a
            href="https://github.com/jmleep/parcel-core-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item.Header as="h2">Parcel Core App</Item.Header>
          </a>
          <Item.Meta content="React - ES6+ -  Parceljs" />
          <Item.Description>
            This application is used as a framework for protoyping web applications. I have
            preconfigured it for postcss, posthtml, babel, eslint, prettier, and Docker.
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Image src={android} size="small" />
        <Item.Content verticalAlign="middle">
          <a
            href="https://github.com/jmleep/Dexter-Android"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item.Header as="h2">Dexter</Item.Header>
          </a>
          <Item.Meta content="Java" />
          <Item.Description>A basic Android app made to hold your contacts.</Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Image src={react} size="small" />
        <Item.Content verticalAlign="middle">
          <a
            href="https://github.com/jmleep/react-md-meetup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item.Header as="h2">React Meetup - Reach Router Demo</Item.Header>
          </a>
          <Item.Meta content="React - ES6+ - Reach Router - Parceljs" />
          <Item.Description>
            This application was created for a presentation given at a React Meetup which
            demonstrated the use of Reach Router as an alternative to React Router
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </div>
);

export default Projects;
