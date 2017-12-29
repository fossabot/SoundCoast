import React, { Component } from 'react';
import SVG  from 'react-inlinesvg';
import '../../styles/css/NavControl.css';

class NavControl extends Component
{
  constructor(props)
  {
    super(props);
    let action = props.action;

    this.btnClass = "btn btn-dark";
    if (action === "min")
    {
      this.click = () => this.minimize();
      this.icon = "android-remove";
    }
    else if (action === "max")
    {
      this.click = () => this.maximize();
      this.icon = "android-expand";
    }
    else if (action === "close")
    {
      this.btnClass = "btn btn-danger";
      this.click = () => this.close();
      this.icon = "android-close";
    }
  }

  render()
  {
    return (
      <button className={"nav-item " + this.btnClass} onClick={this.click}>
        <SVG className="nav-icon" src={require("ionicons-npm/src/" + this.icon + ".svg")}/>
      </button>
    );
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

export default NavControl;
