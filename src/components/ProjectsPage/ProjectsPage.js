import React from 'react'
import styled from 'styled-components'
import { ItemBlock } from '../index'
import AddProjectBlock from './AddProjectBlock'
import ProjectsList from './ProjectsList'

const ProjectsPage = () =>
  <Wrapper>
    <AddProjectBlock />
    <ItemBlock name="PROJECTS">
      <ProjectsList />
    </ItemBlock>
  </Wrapper>

export default ProjectsPage

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`
