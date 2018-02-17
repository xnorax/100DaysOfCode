import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Konami from './components/konami.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activated: false,
      name:""
    };
    this.toggleActivation = this.toggleActivation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleActivation(){
    if (this.state.activated==true) this.setState({activated: false});
    else this.setState({activated: true});
  }

  handleChange(event){
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.state.name.length < 1 ? `` : `, ${this.state.name}`}</h1>
        </header>

        <input type="text" placeholder="Your name" onChange={this.handleChange}/>
        
        <button onClick={this.toggleActivation}>Activate Konami Code</button>
        {this.state.activated ? <Konami name={this.state.name}/> : <div>Konami code: Deactivated</div>}
      </div>
    );
  }
}

export default App;
