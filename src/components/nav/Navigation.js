import React, { Component } from 'react';
import NavEntry from './NavEntry';
import '../../styles/css/Navigation.css'

class Navigation extends Component
{
  constructor()
  {
    super();
    this.page = "home";
    this.pageChanged = true;
    this.pages = new Map([["Home", "ios-home-outline"], ["Library", "ios-albums-outline"]]);
  }

  render()
  {
    let navElements = [];
    this.pages.forEach(function (val, key) {
      navElements.push(<NavEntry key={key} icon={val} link={key}/>);
    });

    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <span className="navbar-brand">SoundCoast</span>
          <div className="navbar-nav">
            {navElements}
          </div>
          <div id="navbar-drag"></div>
          <div id="app-controls" className="navbar-nav">
            <NavEntry onClick={this.minimize} icon="android-remove"/>
            <NavEntry onClick={this.maximize} icon="android-expand"/>
            <NavEntry onClick={this.close} icon="android-close"/>
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

  minimize()
  {
    let w = window.require('electron').remote.getCurrentWindow();
    w.minimize();
  }

  maximize()
  {
    let w = window.require('electron').remote.getCurrentWindow();
    if (w.isMaximized())
      w.unmaximize();
    else
      w.maximize();
  }

  close()
  {
    let w = window.require('electron').remote.getCurrentWindow();
    w.close();
  }
}

export default Navigation;
