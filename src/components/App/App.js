import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './Layout.js'
import { HomePage } from '../index'

const App = () =>
    <Layout>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/projects' component={()=><h1>asds</h1>} />
        </Switch>
    </Layout>

export default App