import React from 'react'
import styled from 'styled-components'
import Project from '../Project'

const ProjectsList = ({ projects }) =>
  <Wrapper>
    { projects.map(project => <Project item={project}/>) }
  </Wrapper>

export default ProjectsList

const Wrapper = styled.div`
  padding: 0px 20px 20px;
  max-width: 800px;
  margin: 0 auto;
`