import React from 'react'
import styled from 'styled-components'

const ProjectsBlock = () =>
    <Wrapper>
        <Title>
            PROJECTS
        </Title>
    </Wrapper>

export default ProjectsBlock

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 10px;
    background: #F7F7F7;
    min-height: 1000px;
    box-shadow: 0 0 1px black;
`

const Title = styled.div`
    padding: 5px 10px;
    font-size: 30px;
    font-weight: 400;
    color: #003F61;
    text-align: center;
    font-family: 'Roboto Regular';
    border-bottom: 1px solid #969696;
`