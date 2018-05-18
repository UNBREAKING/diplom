import React, { Fragment } from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const SkillContainer = ({ skills = [], selectSkill, selectedId }) =>
  <Fragment>
    <Label>Core Skill</Label>
    <Wrapper>
      {
        skills.map(({ name, color, _id }) =>
          <Tag
            key={_id}
            color={color}
            name={name}
            isSelected={selectedId === _id}
            selectHandler={() => selectSkill(_id)} />
        )
      }
    </Wrapper>
  </Fragment>

export default SkillContainer

const Wrapper = styled.div`
  display: block;
  padding: 15px 10px 20px;
  margin-top: 10px;
  background: #F7F7F7;
  box-shadow: 0 0 1px black;
  border-radius: 2px;
`
const Label = styled.div`
  color: #003F61;
  font-size: 16px;
  margin-top: 10px;
  font-family: 'Roboto Regular';
  text-align: left;
`
