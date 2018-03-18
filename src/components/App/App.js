import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { 
    HomePage, 
    Header, 
    Footer, 
    ProjectsPage 
} from '../index'

const App = () =>
    <Wrapper>
        <Header />
        <Content>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/projects' component={ProjectsPage} />
            <Route exact path='/offers' component={()=> <h1>Offers</h1> } />
        </Switch>
        <Footer />
        </Content>
    </Wrapper>

export default App

const Wrapper = styled.div`
    width: 100%;
`
const Content = styled.div`
    width: 100%;
    padding-top: 65px;
`