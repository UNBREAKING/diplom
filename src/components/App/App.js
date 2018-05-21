import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import {
  HomePage,
  Header,
  Footer,
  ProjectsPage,
  UsersPage,
  RegistrationPage,
  AdminPage,
  CreateProjectPage,
  ProjectPage
} from '../index'

const App = () =>
  <Wrapper>
    <Header />
    <Content>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route exact path='/users' component={UsersPage} />
        <Route exact path='/registration' component={RegistrationPage} />
        <Route exact path='/admin-page' component={AdminPage} />
        <Route exact path='/create-project' component={CreateProjectPage} />
        <Route path='/project/:id' component={ProjectPage} />
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