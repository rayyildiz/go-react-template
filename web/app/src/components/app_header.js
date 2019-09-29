import React, {useState} from 'react';
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

const AppHeader = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (e, {name}) => setActiveItem(name);

  return (
    <Menu pointing secondary size='large'>
      <Menu.Item
        name='Home'
        active={activeItem === 'Home'}
        onClick={handleItemClick}
        as={Link}
        to='/'
      />

      {/*<Menu.Menu position='right'>
        <Menu.Item
          name='Latest News'
          active={activeItem === 'Latest News'}
          onClick={handleItemClick}
          as={Link}
          to='/news'
        />
      </Menu.Menu>*/}
    </Menu>
  )
};

export default AppHeader;
