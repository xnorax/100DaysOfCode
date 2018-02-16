import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class Konami extends Component {
    constructor(){
        super();
    }
    
    componentDidMount(){
        Mousetrap.bind(['1 2 3 4','up up down down'],this.popUp);
    }

    componentWillUnmount(){
        Mousetrap.unbind(['1 2 3 4','up up down down']);
    }

    popUp(){
        alert('Konami code happened');
    }

    render() {
        return (
        <div>Hello this is Konami</div>
        );
    }
}

export default Konami;
