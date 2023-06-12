// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    count: 0,
    isStarted: false,
  }

  onStart = () => {
    console.log('start Triggered')
    this.setState(prevState => ({isStarted: !prevState.isStarted}))
  }

  onStop = () => {
    console.log('start Triggered')
  }

  onReset = () => {
    console.log('start Triggered')
  }

  render() {
    const {count, isStarted} = this.state

    console.log(isStarted)

    return (
      <div className="app-container">
        <h1> Stopwatch </h1>
        <p> {count} </p>
        <div className="card-container">
          <div className="card-head">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p>Timer</p>
          </div>
          <h1> 00:00 </h1>
          <div className="buttons-container">
            <button className="start-btn" onClick={this.onStart} type="button">
              Start
            </button>
            <button className="stop-btn" onClick={this.onStop} type="button">
              Stop
            </button>
            <button className="reset-btn" onClick={this.onReset} type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
