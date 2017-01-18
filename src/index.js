import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import App from './App'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App who='world' />
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept('./App', render)
}
