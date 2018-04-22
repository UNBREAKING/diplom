import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ModalWindow = ({ children, closeHandler, width, header }) =>
  <Wrapper>
    <ContentWrapper width={width}>
      <HeaderWrapper>
        <Header>
          {header}
        </Header>
        <CloseButton onClick={closeHandler}>
          X
        </CloseButton>
      </HeaderWrapper>
      <Content>
        {children}
      </Content>
    </ContentWrapper>
  </Wrapper>

ModalWindow.propTypes = {
  closeHandler: PropTypes.func,
  children: PropTypes.node,
  header: PropTypes.string,
  width: PropTypes.string
}

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
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
  background: white;
  box-shadow: 0 0 10px black;
  max-width: ${props => `${props.width || 1280}px`};
`

const HeaderWrapper = styled.div`
  padding: 20px 20px;
  border-bottom: 1px solid black;
`

const Header = styled.div`
  display: inline-block;
  font-size: 30px;
  font-family: 'Roboto Regular';
  color: #003F61;
  width: 90%;
`

const CloseButton = styled.button`
  font-size: 28px;
  font-family: 'Roboto Regular';
  background: white;
  border: none;
  color: #003F61;
  padding: 0 10px;
  border-radius: 20px;
  :hover {
    background: rgba(48, 126, 192,0.3);
    border: 1px solid rgb(48, 126, 192);
  }
`

const Content = styled.div`
  width: 100%;
`