import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import WorkHistory from '../WorkHistory';

const edu = 'education';
const work = 'workhistory';
const proj = 'projects';
const me = 'me';

const MenuView = () => {
  const [activeTab, setActiveTab] = useState(work);
  return (
    <React.Fragment>
      <Menu fluid widths={4}>
        <Menu.Item name={work} active={activeTab === work} onClick={() => setActiveTab(work)}>
          Work History
        </Menu.Item>
        <Menu.Item name={proj} active={activeTab === proj} onClick={() => setActiveTab(proj)}>
          Projects
        </Menu.Item>
        <Menu.Item name={edu} active={activeTab === edu} onClick={() => setActiveTab(edu)}>
          Education
        </Menu.Item>
        <Menu.Item name={me} active={activeTab === me} onClick={() => setActiveTab(me)}>
          About Me
        </Menu.Item>
      </Menu>
      {activeTab === work && <WorkHistory />}
    </React.Fragment>
  );
};

export default MenuView;
