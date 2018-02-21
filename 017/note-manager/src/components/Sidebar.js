import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="editor column column-25">
        <button className="button button-clear" onClick={this.props.add}>+ new note</button>
        <ul>
        {this.props.notes.map((note, index) => (
        <button className='note' onClick={() => this.props.select(note)} key={note.id}>{note.body.substring(0,25)}</button>
        ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
