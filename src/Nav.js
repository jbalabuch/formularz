import React, {Component} from 'react';

class Nav extends Component {
    state = {
     name: 'John'
    };

constructor() {
    super();
    console.warn('Tworzenie instancji klasy Nav');

    setTimeout(() => {
        console.warn('po 5 sekundach');
        this.setState({name: 'Jane'});
    }, 5000);
}

    render() {
        return (
            <nav>My name is {this.state.name}</nav>
        )
    }
}

export{ Nav };