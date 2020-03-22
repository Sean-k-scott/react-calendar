import React from "react";
import Calendar from "./components/Calendar";
import "./App.scss";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span>
              Pinnacle <b>Coaching</b>
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
