import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage, Header } from '../index'

const App = () =>
    <Wrapper>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/projects' component={()=><h1>asds</h1>} />
        </Switch>
    </Wrapper>

export default App

const Wrapper = styled.div`
    width: 100%;
`