import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components'

function reducer(state) { return state; }

var store = createStore(reducer,  window.PROPS);

const Application = () =>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

export default Application