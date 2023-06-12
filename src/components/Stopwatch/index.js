// Write your code here

import {Component} from 'react'
import './index.css'

const initialState = {
  timerElapsedInMinutes: 0,
  timeElapsedInSeconds: 0,
  isStarted: false,
}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimeInterval = () => clearInterval(this.intervalId)

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStart = () => {
    console.log('Start Triggered')
    const {isStarted} = this.state
    if (isStarted === false) {
      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
    }))
  }

  onStop = () => {
    console.log('Stop Triggered')
    const {isStarted} = this.state
    if (isStarted) {
      this.clearTimeInterval()
    }
    this.setState(prevState => ({isStarted: !prevState.isStarted}))
  }

  onReset = () => {
    console.log('Reset Triggered')
    this.clearTimeInterval()
    this.setState(initialState)
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeElapsedInSeconds} = this.state
    const totalElapsedSeconds = timeElapsedInSeconds
    const minutes = Math.floor(totalElapsedSeconds / 60)
    const seconds = Math.floor(totalElapsedSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    // const {isStarted} = this.state

    // console.log(isStarted)

    return (
      <div className="app-container">
        <h1> Stopwatch </h1>
        <div className="card-container">
          <div className="card-head">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p>Timer</p>
          </div>
          <h1> {this.getElapsedSecondsInTimeFormat()} </h1>
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
