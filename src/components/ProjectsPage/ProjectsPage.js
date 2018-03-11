import React from 'react'
import styled from 'styled-components'
import { AddProjectBlock, ProjectsBlock } from '../index'

const ProjectsPage = () =>
    <Wrapper>
        <AddProjectBlock />
        <ProjectsBlock />
    </Wrapper>

export default ProjectsPage

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`
