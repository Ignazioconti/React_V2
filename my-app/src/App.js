import React from "react";
import { HelloWord } from "./HelloWord";
import { Welcome } from "./Welcome";
export class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWord />
        <p>
          <Welcome renderAge={true} />
        </p>
      </div>
    );
  }
}
