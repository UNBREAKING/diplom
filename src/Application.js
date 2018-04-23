import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { routerMiddleware, push } from 'react-router-redux'
import reducers from './reducers/reducers'
import { App } from './components'

const middleware = routerMiddleware(browserHistory)
var store = createStore(reducers,
  applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Application = () =>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

export default Application