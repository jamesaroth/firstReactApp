import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Gabby', age: 27},
      {name: 'Carter', age: 100},
      {name: 'Kenso', age: 50},
      {name: 'Greg', age: 40}
    ],
    otherState: 'some other value'
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name:newName, age:27},
        {name: 'Carter Adams', age:50},
        {name: 'Kenson Trabing', age: 99},
        {name: 'Greg Smith', age:10000}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'TREX', age:27},
        {name: event.target.value, age:100},
        {name: 'RHINO', age: 99},
        {name: 'ELEPHANT', age:10000}
      ]
    })
  }

  render() {
    const style ={
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
  
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p> This is really working</p>
        <button style= {style} onClick={() =>this.switchNameHandler('Gabby is the Best')}>Switch Name
        </button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}>Children Props!</Person> 
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age} />    
      </div>
    );
 }
}

export default App;
