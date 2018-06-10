import React from 'react'
import styled from 'styled-components'
import { BlueButton } from '../../common'
import UserIcon from './UserIcon'

const UsersList = ({ users }) => 
  <Wrapper>
    {
      users.map(({ userInfo: { name, surname, skill: { name: skillName, color } }, usersProjects }) => 
        <User>
          <IconWrapper>
            <UserIcon size="108"/>
          </IconWrapper>
          <Name>
            { `${name} ${surname}`}
          </Name>
          <CoreSkill>
            Core Skill: 
            <Skill color={color}>
              { skillName }
            </Skill>
          </CoreSkill>
          <NumberOfProjects>
            Active Projects:  { usersProjects } 
          </NumberOfProjects>
          <BlueButton text="Look Profile"/>
        </User>
      )
    }
  </Wrapper>

export default UsersList

const Wrapper = styled.div`
  padding: 0 20px 20px 0;
`

const User = styled.div`
  display: inline-block;
  padding: 20px 20px;
  box-shadow: 0 0 1px black;
  background: white;
  margin-left: 20px;
  margin-top: 20px;
`
const NumberOfProjects = styled.div`
  font-family: 'Roboto Regular';
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Name = styled.div`
  font-family: 'Roboto Regular';  
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
  color: #003F61;
  font-weight: 700;
`

const CoreSkill = styled.div`
  font-family: 'Roboto Regular';
  font-size: 14px;
  margin-top: 10px;
`

const Skill = styled.span`
  margin-left: 10px;
  background: ${props => props.color};
  color: white;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 2px;
  box-shadow: 0 0 1px black;
`

const IconWrapper = styled.div`
  text-align: center;
`
