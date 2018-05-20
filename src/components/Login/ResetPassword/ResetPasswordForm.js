import React from 'react'
import styled from 'styled-components'
import { reduxForm, Field } from 'redux-form'
import { CommonPassword } from '../../common'

const ResetPasswordForm = () =>
  <Wrapper>
    <form>
      <Field name="password" label="Password" component={CommonPassword} />
      <Field name="confirmedPassword" label="Confirm Password" component={CommonPassword} />
    </form>
  </Wrapper>

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 20px;
`

export default reduxForm({
  form: 'resetPassword'
})(ResetPasswordForm)