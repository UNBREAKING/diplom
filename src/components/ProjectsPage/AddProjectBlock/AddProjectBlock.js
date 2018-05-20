import React from 'react'
import styled from 'styled-components'
import { BlueButton, Title } from '../../common'

const AddProjectBlock = ({ user_token }) =>
  <Wrapper>
    <Title>
      Add Your Project
    </Title>
    { 
      user_token ? 
        <BlueButton text="Create Project" /> :
        <BlueButton text="Sign In For Creating" />
    }
    <Text>
      Turn your ideas into reality right here. Gather an excellent team for your project.
    </Text>
  </Wrapper>

export default AddProjectBlock

const Wrapper = styled.div`
  margin: 10px 0;
  padding: 5px 20px 15px;
  background: #F7F7F7;
  box-shadow: 0 0 1px black;
`

const Text = styled.div`
  font-size: 20px;
  color: #003F61;
  font-family: 'Roboto Regular';
  font-weight: 400;
  display: inline;
  margin-left: 60px;
`