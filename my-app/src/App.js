import React from "react";
import { Counter } from "./Counter";
import { HelloWord } from "./HelloWord";
import { Welcome } from "./Welcome";
export class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWord />
        <Welcome name="John" renderAge={true} />
        <Counter />
      </div>
    );
  }
}
