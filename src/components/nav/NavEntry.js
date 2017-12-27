import React, { Component } from 'react';
import SVG  from 'react-inlinesvg';
import '../../styles/css/svg.css';

class NavEntry extends Component
{
  constructor(props)
  {
    super(props);
    this.icon = props.icon;
    this.link = props.link;
    this.onClick = props.onClick;
  }

  render()
  {
    return (
      <a className="nav-item nav-link" href={this.link} onClick={this.onClick}>
        <SVG className="nav-icon" src={require("ionicons-npm/src/" + this.icon + ".svg")} preload={this.link} onLoad={(src) => {console.log("src " + src)}}/>
      </a>
    );
  }
}

export default NavEntry;
