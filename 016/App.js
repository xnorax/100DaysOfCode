import React, { Component } from 'react';
import 'milligram';
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: ''
    }
    this.change = this.change.bind(this);
  }

  componentDidMount(){
    localStorage.setItem('note', 'componentDidMount');
  }

  componentWillMount(){
    console.log(`localStorage: ${localStorage.getItem('note')}`);
  }

  change(value) {
    console.log(`Changed!`);
    this.setState({note: value}); 
  }

  render() {
    return (
      <div className="App container">
        <h1>markey mark</h1>
        <div className="row">
          <Sidebar />
          <Editor change={this.change}/>
        </div>
      </div>
    );
  }
}

export default App;
