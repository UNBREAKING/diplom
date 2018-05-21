import React from 'react'
import styled from 'styled-components'
import HeaderInfo from './HeaderInfo'
import DescriptionAndMembers from './DescriptionAndMembers'
import LinksAndJobs from './LinksAndJobs'

const ProjectPage = ({ match }) =>
  <Wrapper>
    <Content>
      <HeaderInfo />
      <DescriptionAndMembers />
      <LinksAndJobs />
    </Content>
  </Wrapper>

export default ProjectPage

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 20px auto;
  padding: 0 20px;
`
const Content = styled.div`
  box-shadow: 0 0 1px black;
  padding: 0 20px 20px;
`