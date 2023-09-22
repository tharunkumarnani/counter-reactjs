import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    console.log('Increment')
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  onDecrement = () => {
    console.log('decrement')
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      }
    })
  }

  resetCount = () => {
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <button className="button" onClick={this.resetCount}>
            Reset
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrement
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
