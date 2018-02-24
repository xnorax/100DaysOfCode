import React, { Component } from 'react';
import 'milligram';
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Konami from './components/konami.js';

class App extends Component {
  constructor() {
    super();
    const noteKey = "NOTES";
    var storedNotes = JSON.parse(localStorage.getItem(noteKey));
    this.state = {
      notes: storedNotes ? storedNotes : [],
      selectedNote:''
    }; 
    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.guid = this.guid.bind(this);
    this.s4 = this.s4.bind(this);
  }
  
  addNote(){
    
    // add a note with a body
    var note = {id:`${this.guid()}`, body: '# New Note'};

    // select that note
    this.setState({selectedNote: note});

    // add the note to notes in state & local storage
    var newNotes = this.state.notes;
    newNotes.push(note);
    this.setState({notes: newNotes});
    localStorage.setItem("NOTES", JSON.stringify(newNotes));
  }

  updateNote(body) {

    // Update selected note state
    let currentNote = this.state.selectedNote;
    currentNote.body = body;
    this.setState({selectedNote: currentNote});

    // Update note body in notes
    let notes = this.state.notes;
    let noteIndex = notes.findIndex((note) => {
      return note.id === currentNote.id;
    });
    notes[noteIndex].body = currentNote.body;

    // Update notes state
    this.setState({notes: notes});

    localStorage.setItem("NOTES", JSON.stringify(this.state.notes));
  }

  selectNote(note){
    if (note === this.state.selectedNote) return;
    this.setState({selectedNote: note});
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  render() {
    return (
      <div className="App container">
        <h1>markey mark</h1>
        <div className="row">
          <Sidebar add={this.addNote} select={this.selectNote} selected={this.state.selectedNote} notes={this.state.notes}/>
          <Editor change={this.updateNote} selectedNote={this.state.selectedNote}/>
        </div>
      </div>
    );
  }
}

export default App;
