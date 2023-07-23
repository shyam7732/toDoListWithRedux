import React from 'react'
import Home from './Home'
import { Provider } from 'react-redux'
import Store from './Store'

function Main() {
  return (
    <Provider store={Store}>
        <Home />
    </Provider>
  )
}

export default Main