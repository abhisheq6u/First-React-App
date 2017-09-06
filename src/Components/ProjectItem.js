import React, { Component } from 'react';
import '../App.css';

class ProjectItem extends Component {
  
  render() {
    return (
      <li className="Projects">
        My Projects{this.props.test}
      </li>
    );
  }
}

export default ProjectItem;
