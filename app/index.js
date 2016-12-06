import React from 'react'
import { render } from 'react-dom'

import HomePage from './components/HomePage/HomePage'
import Chuck from './components/Chuck/Chuck'
if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}


render(<Chuck />, document.getElementById('app'))
