import React from 'react'
import styled from 'styled-components'
import { reduxForm, Field } from 'redux-form'
import { CommonInput } from '../../common'

const ForgotPasswordForm = () =>
  <Wrapper>
    <form>
      <Field name="login" label="Login" component={CommonInput} />
    </form>
  </Wrapper>

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 20px;
`

export default reduxForm({
  form: 'forgotPassword'
})(ForgotPasswordForm)