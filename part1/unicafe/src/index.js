import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

function all(good, neutral, bad) {
  return good + neutral + bad
}

function average(good, neutral, bad) {
  const total = good + bad + neutral
  return total ? (good -bad) / total : 0
}

function positive(good, neutral, bad) {
  const total = good + bad + neutral
  return total ? good / total * 100 : 0
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} >{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return <div>{text} {value}</div>
}

const Statistics = (props) => {
  const [good, neutral, bad] = props.data
  const ifShow = (good === 0) && (neutral === 0) && (bad === 0)
  return ifShow ? (
    <div>
      <h1>statistics</h1>
      <div>No feedback given</div>
    </div>
  ) :(
    <div>
        <h1>statistics</h1>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <div>all {all(good, neutral, bad)}</div>
        <div>average {average(good, neutral, bad)}</div>
        <div>positive {positive(good, neutral, bad)}%</div>
      </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div style={{padding: '30px'}}>
      <div>
        <h1>give feedback</h1>
        <Button text='good' handleClick={() => setGood(c => c+1)} />
        <Button text='neutral' handleClick={() => setNeutral(c => c+1)} />
        <Button text='bad' handleClick={() => setBad(c => c+1)} />
      </div>
      <Statistics data={[good, neutral, bad]} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
