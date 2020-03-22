import React from "react";
import * as dateFns from 'date-fns';

class Calendar extends React.Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    clicked: false,
    selectedOne: false,
    selectedTwo: false,
    selectedThree: false,
    dateOne: "",
    dateTwo: "",
    dateThree: ""
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "iiii";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {

    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "d";
    const timeslotFormat = "do MMM";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    let formatTimeslot = "";
    let timeslotOne = "12am - 3pm";
    let timeslotTwo = "4pm - 7pm";
    let timeslotThree = "8pm - 11pm";
    let fullslotOne = "";
    let fullslotTwo = "";
    let fullslotThree = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        formatTimeslot = dateFns.format(day, timeslotFormat);
        fullslotOne = formatTimeslot + " " + timeslotOne;
        fullslotTwo = formatTimeslot + " " + timeslotTwo;
        fullslotThree = formatTimeslot + " " + timeslotThree;
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.toDate(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <span className="timeslotOne" value={fullslotOne} onClick={this.handleClick}>{formatTimeslot} {timeslotOne}</span>
            <span className="timeslotTwo" value={fullslotTwo} onClick={this.handleClick}>{formatTimeslot} {timeslotTwo}</span>
            <span className="timeslotThree" value={fullslotThree} onClick={this.handleClick}>{formatTimeslot} {timeslotThree}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  renderSelected() {
    return (
      <div className="calendar__selected">
        <span className="calendar__selected__date">Timeslot One: ß{this.state.dateOne}</span>
        <span className="calendar__selected__date">Timeslot Two: {this.state.dateTwo}</span>
        <span className="calendar__selected__date">Timeslot Three: {this.state.dateThree}</span>
      </div>
    )
  }

  handleClick = () => {
    if (this.state.selectedOne === false) {
      this.setState({
        selectedOne: true,
        dateOne: "Test One"
      });
    } if (this.state.selectedOne === true && this.state.selectedTwo === false) {
      this.setState({
        selectedTwo: true,
        dateTwo: "Test Two"
      });
    } if (this.state.selectedTwo === true && this.state.selectedThree === false) {
      this.setState({
        selectedThree: true,
        dateThree: "Test Three"
      });
    }
  }

  selectOne = () => {
    this.setState({
      selectedOne: "Test One"
    });
  }

  selectTwo = () => {
    this.setState({
      selectedTwo: "Test Two"
    });
  }

  selectThree = () => {
    this.setState({
      selectedThree: "Test Three"
    });
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };


  render() {
    return (
      <div className="calendar__wrapper">
      <h2>Please select three timeslots that you are available for a session:</h2>
        <div className="calendar__object">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
          {this.renderSelected()}
      </div>
    );
  }
}

export default Calendar;
