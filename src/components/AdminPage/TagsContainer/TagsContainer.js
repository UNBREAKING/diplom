import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const TagsContainer = ({ tags = [], removeHandler }) =>
  <Wrapper>
    {
      tags.map(({ name, color, _id }) => 
        <Tag
          key={_id}
          color={color} 
          name={name}
          removeHandler={() => removeHandler(_id)} />
      )
    }
  </Wrapper>

export default TagsContainer

const Wrapper = styled.div`
  display: block;
  padding: 15px 10px 20px;
  margin-top: 20px;
  background: #F7F7F7;
  box-shadow: 0 0 1px black;
  border-radius: 2px;
`
