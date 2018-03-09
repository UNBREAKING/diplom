import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from '../index'

const App = () =>
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
    </Switch>

export default App