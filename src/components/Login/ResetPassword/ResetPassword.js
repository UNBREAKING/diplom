import React from 'react'
import styled from 'styled-components'
import { ModalWindow, BlueButton } from '../../common'
import ResetPasswordForm from './ResetPasswordForm'

const ResetPassword = ({ resetModalOpen, closeResetPasswordModal, resetPassword }) =>
  resetModalOpen &&
    <ModalWindow
      width="480"
      header="Reset Password"
      closeHandler={() => closeResetPasswordModal()}>
      <ResetPasswordForm />
      <ResetButtonWrapper>
        <BlueButton text="Reset" onClick={resetPassword}/>
      </ResetButtonWrapper>
    </ModalWindow>

export default ResetPassword

const ResetButtonWrapper = styled.div`
  padding: 20px 20px;
  border-top: 1px solid black;
`