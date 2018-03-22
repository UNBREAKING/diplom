import React from 'react'
import styled from 'styled-components'
import { BlueButton } from '../common'

const AddProjectBlock = () =>
  <Wrapper>
    <Title>
      Add Your Project
    </Title>
    <BlueButton text="Create Project" />
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

const Title = styled.h1`
  color: #003F61;
  font-family: 'Roboto Regular';
  font-weight: 400;
  text-align: center;
`
const Text = styled.div`
  font-size: 20px;
  color: #003F61;
  font-family: 'Roboto Regular';
  font-weight: 400;
  display: inline;
  margin-left: 60px;
`