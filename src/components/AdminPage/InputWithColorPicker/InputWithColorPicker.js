import React from 'react'
import styled from 'styled-components'
import { SliderPicker } from 'react-color';
import { CommonInput } from '../../common'

const InputWithColorPicker = ({ label }) =>
  <Wrapper>
    <CommonInput label={label} />
    <ColorWrapper>
      <SliderPicker />
    </ColorWrapper>
  </Wrapper>

export default InputWithColorPicker 

const Wrapper = styled.div`
`

const ColorWrapper = styled.div`
  margin-top: 20px;
  max-width: 400px;
`