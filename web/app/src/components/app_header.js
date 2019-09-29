import React, {useState} from 'react';
import {Menu} from "semantic-ui-react";

const AppHeader = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (e, {name}) => setActiveItem(name);

  return (
    <Menu pointing secondary size='large'>
      <Menu.Item
        name='Home'
        active={activeItem === 'Home'}
        onClick={handleItemClick}
      />

      {/*<Menu.Menu position='right'>
        <Menu.Item
          name='Latest News'
          active={activeItem === 'Latest News'}
          onClick={handleItemClick}
        />
      </Menu.Menu>*/}
    </Menu>
  )
};

export default AppHeader;
