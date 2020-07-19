import React from 'react';
import './Sidebar.css';
import { bubble as Menu } from 'react-burger-menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CodeIcon from '@material-ui/icons/Code';
import GroupIcon from '@material-ui/icons/Group';
import BookIcon from '@material-ui/icons/Book';
// import SvgMenuIcon from '@material-ui/icons/SvgMenuIcon';

import ExampleComponent from 'react-rounded-image';
import MyPhoto from './dp-2.jpg';

const Navbar = () => {
  return (
    <div>
      <CssBaseline />
      <Menu
        right
        pageWrapId={'page-wrap'}
        width={'280px'}
        customBurgerIcon={<img src={require('../../assets/menu.svg')} />}
      >
        <main id="page-wrap"></main>
        <div className="img">
          <ExampleComponent
            image={MyPhoto}
            roundedColor=""
            imageWidth="180"
            imageHeight="180"
            roundedSize="1"
          />
        </div>
        <div className="name">Rishabh Malhotra</div>
        <nav class="bm-item-list">
          <a id="home" className="bm-item" href="/">
            <HomeIcon fontSize={'inherit'} />
            <span className="wrap">Home</span>
          </a>
          <a id="event" className="bm-item" href="/">
            <EventIcon fontSize={'inherit'} />
            <span className="wrap">Event</span>
          </a>
          <a id="resources" className="bm-item" href="/">
            <BookIcon fontSize={'inherit'} />
            <span className="wrap">Resources</span>
          </a>
          <a id="Project" className="bm-item" href="/">
            <CodeIcon fontSize={'inherit'} />
            <span className="wrap">Projects</span>
          </a>
          <a id="team" className="bm-item" href="/">
            <GroupIcon fontSize={'inherit'} />
            <span className="wrap">Team</span>
          </a>
        </nav>
      </Menu>
    </div>
  );
};

export default Navbar;
