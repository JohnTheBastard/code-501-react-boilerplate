import React from 'react'
import { render } from 'react-dom'

import Chuck from './components/Chuck/Chuck'
if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}
render(<Chuck />, document.getElementById('app'))

// import HomePage from './components/HomePage/HomePage'
// if (process.env.NODE_ENV !== 'production') {
//   React.Perf = require('react-addons-perf')
// }
// render(<HomePage />, document.getElementById('app'))
