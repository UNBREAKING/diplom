import React from 'react'
import styled from 'styled-components'

const ModalWindow = ({ children, closeHandler }) =>
    <Wrapper>
        <ContentWrapper>
            <Header>
                Sign Up
            </Header>
            {children}
        </ContentWrapper>
    </Wrapper>

export default ModalWindow

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    bottom: 0; 
    left: 0; 
    top: 0; 
    right: 0;
`

const ContentWrapper = styled.div`
    padding: 20px 20px;
    margin: 0 auto;
    background: white;
    box-shadow: 0 0 1px black;
`

const Header = styled.div`
`