import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="editor column column-25">
        <button className="button button-clear">+ new note</button>
      </div>
    );
  }
}

export default Sidebar;
