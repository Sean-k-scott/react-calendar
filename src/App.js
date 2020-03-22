import React from "react";
import Calendar from "./components/Calendar";
import "./App.scss";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              booking<b>Calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
