import React from 'react'
import styled from 'styled-components'
import { SliderPicker } from 'react-color';
import { CommonInput, BlueButton } from '../../common'
import { Field } from 'redux-form'

const InputWithColorPicker = ({ label, name, setColor, color }) =>
  <form>
    <Field name={name} label={label} span type="text" component={CommonInput} />
    <ColorWrapper>
      <SliderPicker 
        color={color} 
        onChangeComplete={setColor} 
        onChange={setColor} />
    </ColorWrapper>
    <ButtonContainer>
      <BlueButton text='Add' type='submit' />
    </ButtonContainer>
  </form>

export default InputWithColorPicker 

const ColorWrapper = styled.div`
  margin-top: 20px;
  max-width: 400px;
`
const ButtonContainer = styled.div`
  margin-top: 20px;
`