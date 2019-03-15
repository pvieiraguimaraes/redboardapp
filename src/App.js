import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Hawk', power: 30 },
            { name: 'Meliodas', power: 4400, weapon: 'Sword' },
            { name: 'Elizabeth', power: 100 },
            { name: 'Ban', power: 3300 }
        ],
        place: 'Hoar Bar'
    }

    switchTheSevensHandler = () => {
        this.setState({
            persons: [
                { name: 'King', power: 3100, weapon: 'Pillow' },
                { name: 'Diane', power: 3600, weapon: 'Hammer' }
            ],
            place: 'Druid Land'
        });
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.place}</h1>

                <button onClick={this.switchTheSevensHandler}>The Seven's</button>

                <Person name={this.state.persons[0].name} power={this.state.persons[0].power}>{this.state.persons[0].weapon}</Person>
                <Person name={this.state.persons[1].name} power={this.state.persons[1].power}>{this.state.persons[1].weapon}</Person>
            </div>
        );
    }
}

export default App;
