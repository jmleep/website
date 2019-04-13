import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import WorkHistory from '../WorkHistory';
import Projects from '../Projects';

const edu = 'education';
const work = 'workhistory';
const proj = 'projects';
const me = 'me';

const getActiveView = activeTab => {
  switch (activeTab) {
    case work:
      return <WorkHistory />;
    case proj:
      return <Projects />;
    default:
      return <WorkHistory />;
  }
};

const MenuView = () => {
  const [activeTab, setActiveTab] = useState(proj);
  return (
    <React.Fragment>
      <Menu fluid widths={4}>
        <Menu.Item name={proj} active={activeTab === proj} onClick={() => setActiveTab(proj)}>
          Projects
        </Menu.Item>
        <Menu.Item name={work} active={activeTab === work} onClick={() => setActiveTab(work)}>
          Work History
        </Menu.Item>
        <Menu.Item name={edu} active={activeTab === edu} onClick={() => setActiveTab(edu)}>
          Education
        </Menu.Item>
        <Menu.Item name={me} active={activeTab === me} onClick={() => setActiveTab(me)}>
          About Me
        </Menu.Item>
      </Menu>
      {getActiveView(activeTab)}
    </React.Fragment>
  );
};

export default MenuView;
