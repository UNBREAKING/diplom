import React from 'react'
import styled, { css } from 'styled-components'
import { BlueButton } from '../../common'
import ProjectIcon from './ProjectIcon'

const HeaderInfo = ({ name, tags = [], status }) =>
  <Wrapper>
    <ImageContent>
      <ProjectIcon/>
    </ImageContent>
    <Content>
      <Name>
        {name}
      </Name>
      <Tags>
        <Label>
          Tags:
        </Label>
        <TagsWrapper>
          {
            tags.map(({ name, color, _id }) =>
              <Tag key={_id} color={color}>
                { name }
              </Tag>
            )
          }
        </TagsWrapper>
      </Tags>
    </Content>
    <RightContent>
      <Status status={status}>
        { status }
      </Status>
      {
        status === 'Created' &&
          <BlueButton text="Start" />
      }
      {
        status === 'Continue' && 
          <BlueButton text="On Pause" />
      }
      {
        status === 'On Pause' &&
          <BlueButton text="Continue" />
      }
      { 
        status !== 'Created' &&
          <BlueButton text="Close" />
      }
    </RightContent>
  </Wrapper>

export default HeaderInfo

const Wrapper = styled.div`
  padding-top: 20px;
`

const ImageContent = styled.span`
  background: #F7F7F7;
  display: inline-block;
`

const Content = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-left: 20px;
`

const Name = styled.div`
  font-family: 'Roboto Regular';
  color: #003F61;
  font-size: 24px;
  font-weight: 700;
`

const Label = styled.span`
  margin-right: 5px;
  font-family: 'Roboto Regular';
`

const Tags = styled.div`
  margin-top: 5px;
`

const Tag = styled.span`
  font-family: 'Roboto Regular';
  color: white;
  background: ${props => props.color};
  border-radius: 2px;
  box-shadow: 0 0 1px black;
  padding: 5px 8px; 
  margin-right: 5px;
`

const TagsWrapper = styled.div`
  margin-top: 8px;
`

const RightContent = styled.div`
  float: right;
`

const Status = styled.div`
  font-family: 'Roboto Regular';
  margin-bottom: 10px;
  text-align: center;
  ${props => (props.status === 'Created' || props.status === 'In Progress') && css`
    color: #00E608;
  `}
  ${props => props.status === 'Closed' && css`
    color: #E6001C;
  `}
  ${props => props.status === 'On Pause' && css`
    color: #E6C500;
  `}
`