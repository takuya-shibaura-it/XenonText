import React from "react"
import TitleBar from "./components/TitleBar"

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TitleBar />
      </div>
    );
  }
}