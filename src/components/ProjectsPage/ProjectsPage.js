import React from 'react'
import styled from 'styled-components'
import { AddProjectBlock, ItemBlock } from '../index'

const ProjectsPage = () =>
  <Wrapper>
    <AddProjectBlock />
    <ItemBlock name="PROJECTS" />
  </Wrapper>

export default ProjectsPage

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`
