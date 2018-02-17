import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class Konami extends Component {
    constructor(){
        super();
        this.popUp = this.popUp.bind(this);
    }
    
    componentDidMount(){
        Mousetrap.bind(['1 2 3 4','up up down down'],this.popUp);
    }

    componentWillUnmount(){
        Mousetrap.unbind(['1 2 3 4','up up down down']);
    }

    popUp(){
        alert(`Konami code happened ${this.props.name}`);
    }

    render() {
        return (
        <div>Konami code: Activated</div>
        );
    }
}

export default Konami;
