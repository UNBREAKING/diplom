import React from 'react'
import styled from 'styled-components'

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
          !members.length &&
            <NoMembers>
              Find free positions under.
            </NoMembers> 
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
  width: 100%;
  height: 400px;
`

const NoMembers = styled.div`
  text-align: center;
  font-family: 'Roboto Regular';
  font-size: 16px;
  color: #003F61;
`