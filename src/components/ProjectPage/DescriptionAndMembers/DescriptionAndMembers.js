import React from 'react'
import styled from 'styled-components'
import UserIcon from '../UserIcon'

const DescriptionAndMembers = ({ description, membersLabel, members }) =>
  <Wrapper>
    <Description>
      <Label>
        Description
      </Label>
      <Content>
        {description}
      </Content>
    </Description>
    <Members>
      <Label>
        {membersLabel}
      </Label>
      <MembersContent>
        {
          members.map(({ jobId: { name }, userId: { name: firstName, surname} }) =>
            <User key={`${firstName}_${surname}_${name}`}>
              <ImageContent>
                <UserIcon size="48" />
              </ImageContent>
              <MemberContent>
                <UserName>
                  { `${firstName} ${surname}` }
                </UserName>
                <Job>
                  { name }
                </Job>
              </MemberContent>
            </User>
          )
        }
      </MembersContent>
    </Members>
  </Wrapper>

export default DescriptionAndMembers

const Wrapper = styled.div`
  margin-top: 20px;
  display: table;
  width: 100%;
`

const Description = styled.div`
  display: table-cell;
  width: 50%;
  vertical-align: top;
`

const Label = styled.div`
  margin-bottom: 20px;
  font-family: 'Roboto Regular';
  font-size: 18px;
  color: #003F61;
  font-weight: 700;
`

const Content = styled.div`
  font-size: 16px;
  font-family: 'Roboto Regular';
`

const Members = styled.div`
  display: table-cell;
  width: 50%;
  padding-left:20px;
`

const MembersContent = styled.div`
  background: #F7F7F7;
  box-shadow: 0 0 1px black;
  overflow-y: scroll;
  height: 400px;
  padding: 0 10px 10px;
`

const User = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: ${props => props.selected ? '#CFCFCF': '#F7F7F7'};
  box-shadow: 0 0 1px black;
`

const ImageContent = styled.span`

`

const MemberContent = styled.span`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
`

const UserName = styled.div`
  font-family: 'Roboto Regular';
  color: #003F61;
  font-size: 18px;
  font-weight: 700;
`

const Job = styled.div`
  font-family: 'Roboto Regular';
  font-size: 16px;
  margin-top: 5px;
  color: #003F61;
`