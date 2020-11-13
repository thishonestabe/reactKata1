import React from "react";
import Person from "../Person/Person";

const personList = (props) => {
    let items = []
    for (const [index,person] of props.personas.entries()) {
        items.push(<li key={index}><Person  name={person.name} apellido={person.apellido} age={person.age} /></li>)
    }
    return (
        <div style={props.estilo}>
            <ul style={{textAlign: 'center'}}>
            {items}
            </ul>
        </div>

    )
}

export default personList
