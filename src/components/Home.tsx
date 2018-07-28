import * as React from "react";
import Person from "./Person";

// 1. This our data array. It contains our people and their information.
const data = [
  {
    id: 1,
    name: "Hugh Jackman",
    age: 54
  },
  {
    id: 2,
    name: "Rob Zombie",
    age: 14
  },
  {
    id: 3,
    name: "Ronald McDonald",
    age: 24
  },
  {
    id: 4,
    name: "Lil John",
    age: 90
  },
  {
    id: 5,
    name: "Boo Ya Baby",
    age: 1
  }
];

export default class Home extends React.Component {
  public render() {
    // 2. Here we are taking our data array and making a new array of <Person/>
    //    components and assigned it to a persons const, where each person object is being
    //    mapped to the props.
    const persons = data.map(person => (
      <Person key={person.id} name={person.name} age={person.age} />
    ));

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#03A9F4"
        }}
        // 3. Finally we render all our <Person /> components in the persons array
      >
        {persons}
      </div>
    );
  }
}
