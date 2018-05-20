import React from 'react'
import styled from 'styled-components'
import { ModalWindow, BlueButton } from '../../common'
import ForgotPasswordForm from './ForgotPasswordForm'

const ForgotPassword = ({ isForgotPassword, closeForgotPasswordModal, checkLogin }) =>
  isForgotPassword &&
    <ModalWindow
      width="480"
      header="Forgot Password"
      closeHandler={() => closeForgotPasswordModal()}>
      <ForgotPasswordForm />
      <CheckButtonWrapper>
        <BlueButton text="Check Login" onClick={checkLogin} />
      </CheckButtonWrapper>
    </ModalWindow>

export default ForgotPassword

const CheckButtonWrapper = styled.div`
  padding: 20px 20px;
  border-top: 1px solid black;
`