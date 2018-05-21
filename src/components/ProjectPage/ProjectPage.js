import React from 'react'
import styled from 'styled-components'
import HeaderInfo from './HeaderInfo'

const ProjectPage = ({ match }) =>
  <Wrapper>
    <HeaderInfo/>
  </Wrapper>

export default ProjectPage

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 20px auto;
  padding: 0 20px;
  box-shadow: 0 0 1px black;
`