import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router} from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers'
import { App } from './components'

const history = createHistory()
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunk, middleware))
);

const Application = () =>
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>

export default Application