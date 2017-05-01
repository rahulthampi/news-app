import React, { Component } from 'react';

import './styles/Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-nav">
        <ul>
          <a href=""><li><span>General</span></li></a>
          <a href=""><li><span>Technology</span></li></a>
          <a href=""><li><span>Sport</span></li></a>
          <a href=""><li><span>Business</span></li></a>
          <a href=""><li><span>Entertainment</span></li></a>
          <a href=""><li><span>Gaming</span></li></a>
          <a href=""><li><span>Music</span></li></a>
          <a href=""><li><span>Science & Nature</span></li></a>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
