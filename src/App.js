import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import PersonList from './PersonList/PersonList'
// TODO: ESTA ES LA MANERA CLASICA DE HACERLO ABAJO CONVERTIREMOS EL CLASS COMPONENT EN UN FUNCTIONAL COMPONENT
// class App extends Component {
//   state = {
//     persons: [
//         {name:'Max', age: 28},
//         {name: "manu", age: 10},
//         {name:"abe", age: 33}
//         ],
//     otherState: 'some other value'
//   }
//
//   switchNameHandler = () => {
//    // this.state.persons[0] = 'MAXIMILIUM'; // DONT DO THIS
//     this.setState({
//       persons: [
//         {name:'MAXIMILIANOOO', age: 28},
//         {name: "MANUUUUU", age: 10},
//         {name:"ABEEEEEE", age: 33}
//       ]
//     })
//   }
//
//   render() {
//     return (
//       <div className="App">
//        <h1>Hi, I am a React App</h1>
//         <p>This is really working</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies are: racing</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );
//
//     //return React.createElement('div', null, 'h1','Hi , I am a React App'); // this renders h1 as a text to fixt this we need use the code below
//     //return React.createElement('div', null, React.createElement('h1',null,'Hi , I am a React App')); // this fixes the last problem but it does not apply the css class. to fix this we need to substitute the null.
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi , I am a React App'));
//   }
// }

//TODO: FUNCTIONAL COMPONENT
const app = props => {

    const [personState, setPersonsState] = useState({
      persons: [
        {name:'pedro',apellido:'salve', age: 28},
        {name: "manu",apellido:'chao', age: 10},
        {name:"abe",apellido:'marques', age: 33}
        ],

    });



    const [otherState, setOtherState] = useState({ otherState: 'some other value'});

    const switchNameHandler = () => {
        setPersonsState({
       persons: [
         {name:'PEDROOOOOOO',apellido:'salve', age: 28},
         {name: "MANUUUUU",apellido:'chao', age: 10},
        {name:"ABEEEEEE",apellido:'marques', age: 33}
      ]
     })
  }
    return (
        <div className="App">
          <h1>Sata is coming to town</h1>
          <p>somebody help me!</p>
          <button onClick={switchNameHandler}>Switch Name</button>
            <PersonList personas={personState.persons} estilo={{color: 'red'}}/>
        </div>
    );

}

export default app;

// <Person name={personState.persons[0].name} apellido={personState.persons[0].apellido} age={personState.persons[0].age} />
// <Person name={personState.persons[1].name} apellido={personState.persons[1].apellido} age={personState.persons[1].age} >My hobbies are: racing</Person>
// <Person name={personState.persons[2].name} apellido={personState.persons[2].apellido} age={personState.persons[2].age} />
