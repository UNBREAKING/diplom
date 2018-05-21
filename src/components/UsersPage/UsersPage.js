import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ItemBlock } from '../index'

const UsersPage = () => 
  <Wrapper>
    <ItemBlock name="Users" />
  </Wrapper>

export default UsersPage

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 20px auto 0;
  padding: 0 20px;
`