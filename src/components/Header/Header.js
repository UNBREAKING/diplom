import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Login } from '../index'

const Header = () =>
  <Wrapper>
    <ProjectName>
      InProject
    </ProjectName>
    <ClickbleWrapper>
      <LinkWrapper>
        <LinkButton to='/'>
          Home
        </LinkButton>
        <LinkButton to='/projects'>
          Projects
        </LinkButton>
        <LinkButton to='/offers'>
          Offers
        </LinkButton>
      </LinkWrapper>
      <Login />
    </ClickbleWrapper>
  </Wrapper>

export default Header

const Wrapper = styled.div`
  background: #003F61;
  padding: 10px 0;
  vertical-align: middle;
  width: 100%;
  box-shadow: 0 0 10px black;
  position: fixed;
`

const ProjectName = styled.span`
  color: white;
  font-size: 36px;
  font-family: 'Roboto Regular';
  font-weight: 700;
  padding-left: 20px;
`

const LinkButton = styled(Link) `
  color: white;
  border-left: 2px solid white;
  font-size: 24px;
  font-family: 'Roboto Light';
  margin-left: 20px;
  padding-left: 10px;
  text-decoration:none;
  cursor: pointer;
  :hover {
    border-left: 2px solid #E3E3E3;
    color: #E3E3E3;
  }
`

const LinkWrapper = styled.span`
  padding-right: 40px;
`

const ClickbleWrapper = styled.div`
  float: right;
  padding-right: 20px;
`
