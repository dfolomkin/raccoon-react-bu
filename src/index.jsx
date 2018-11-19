import * as React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import browserHistory from 'react-router'

import { App } from './app/app'

import './assets/styles/reset.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  document.getElementById('app')
)
