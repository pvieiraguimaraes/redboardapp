import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person dollars="100"/>

                <Person dollars="10">10 dollars</Person>
            </div>
        );
    }
}

export default App;
