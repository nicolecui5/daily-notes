import React, { Component } from "react";

export class Calendar extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="month">
          <ul>
            <li className="prev">&#10094;</li>
            <li className="next">&#10095;</li>
            <li>
              August
              <br />
              <span style={{ fontSize: "18px" }}>2017</span>
            </li>
          </ul>
        </div>

        <ul className="weekdays">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ul className="days">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>
            <span className="active">10</span>
          </li>
          <li>11</li>
          ...etc
        </ul>
      </>
    );
  }
}
