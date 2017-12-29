import React, { Component } from 'react';
import NavEntry from './NavEntry';
import NavControl from './NavControl';
import '../../styles/css/Navigation.css'

class Navigation extends Component
{
  constructor()
  {
    super();
    this.page = "home";
    this.pageChanged = true;
    let pages = new Map([["Home", "ios-home-outline"], ["Library", "ios-albums-outline"]]);
    this.navElements = [];

    pages.forEach((val, key) => {
      let active = this.page.toUpperCase() === key.toUpperCase();
      this.navElements.push(<NavEntry active={active} key={key} icon={val} link={key}/>);
    }, this);
  }

  render()
  {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <span className="navbar-brand">SoundCoast</span>
          <div className="navbar-nav">
            {this.navElements}
          </div>
          <div id="navbar-drag"></div>
          <div id="app-controls" className="navbar-nav">
            <NavControl action="min"/>
            <NavControl action="max"/>
            <NavControl action="close"/>
          </div>
      </nav>
    );
  }

  shouldComponentUpdate(newProp, newState)
  {
    if (this.pageChanged)
    {
      this.pageChanged = false;
      return true;
    }
    else
    {
      return false;
    }
  }


}

export default Navigation;
