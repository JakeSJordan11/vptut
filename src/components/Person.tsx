import * as React from "react";

interface Props {
  name: string;
  age: number;
}

export default class Person extends React.Component<Props> {
  public render() {
    return (
      <div
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "24",
          backgroundColor: "white",
          width: "50%",
          padding: 20,
          margin: 10,
          boxShadow: "5px 3px 3px rgba(0,0,0,0.5)"
        }}
      >
        Hello! My name is {this.props.name} and I am {this.props.age} years old!
      </div>
    );
  }
}
