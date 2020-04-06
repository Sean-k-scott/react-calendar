import React from "react";
import Calendar from "./components/Calendar";
import "./App.scss";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <div id="title">
            <h1>
              Pinnacle Coaching
            </h1>
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
