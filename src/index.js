import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.scss'

const App = React.memo(props => (
  <div className={style.app}>
    Awesome label: {props.label}
  </div>
))

ReactDOM.render(<App label='Hello, world' />, document.getElementById('app'))
