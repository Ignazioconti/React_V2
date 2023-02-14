import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue ?? 0,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + (this.props.incrementalAmount ?? 1),
        };
      });
    }, this.props.incrementInterval ?? 1000);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.props.count} />
      </div>
    );
  }
}
