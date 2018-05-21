import React from 'react'
import styled, { css } from 'styled-components'
import ProjectIcon from './ProjectIcon'
import { BlueButton } from '../../common'

const Project = ({ item: { project: { name, tags, status }, jobsLength, teamLength } }) =>
 <Wrapper>
    <ImageBlock>
      <ProjectIcon />
    </ImageBlock>
    <Content>
      <Name> {name }</Name>
      <Team>
        <Label>
          Team:
        </Label>
        {`${teamLength} / ${jobsLength} memebers`}
      </Team>
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
      <BlueButton text="View Information"/>
      <Status>
        <Label>
          Status:
        </Label>
        { status }
      </Status>
    </RightContent>
 </Wrapper>


export default Project

const Wrapper = styled.div`
  padding: 20px 20px;
  margin-top: 20px;
  box-shadow: 0 0 1px black;
  background: white;
`

const ImageBlock = styled.div`
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
  font-size: 18px;
  font-weight: 700;
`

const Team = styled.div`
  font-family: 'Roboto Regular';
  margin-top: 5px;
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
  margin-top: 10px;
`