import React from 'react'
import styled from 'styled-components'

const AddProjectBlock = () =>
    <Wrapper>
        <Title>
            Add Your Project
        </Title>
    </Wrapper>

export default AddProjectBlock

const Wrapper = styled.div`
    margin: 10px 0;
    padding: 5px 20px;
    background: #F7F7F7;
    box-shadow: 0 0 1px black;
    text-align: center;
`

const Title = styled.h1`
    color: #003F61;
    font-family: 'Roboto Regular';
    font-weight: 400;
`