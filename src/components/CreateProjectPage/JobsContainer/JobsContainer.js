import React from 'react'
import styled from 'styled-components'

const JobsContainer = ({ jobs, unsaveJob }) =>
  <Wrapper>
    <Label>Selected Jobs</Label>
    <ContentWrapper>
      {
        jobs.map(({ name, color }, index) => 
          <Job color={color} key={`${name}-${index}`}>
            { name }
            <RemoveButton onClick={() => unsaveJob(index)}>
              X
            </RemoveButton>
          </Job>)
        }
    </ContentWrapper>
  </Wrapper>

export default JobsContainer

const Wrapper = styled.div`
  display: block;
  margin-top: 10px;
  max-width: 300px;
`
const Label = styled.div`
  color: #003F61;
  font-size: 16px;
  margin-top: 10px;
  font-family: 'Roboto Regular';
  text-align: left;
`

const ContentWrapper = styled.div`
  max-width: 300px;
  padding: 15px 10px 20px;
  margin-top: 10px;
  background: #F7F7F7;
  box-shadow: 0 0 1px black;
  height: 140px;
  overflow-y: scroll;
`

const Job = styled.div`
  color: white;
  padding: 5px 5px 5px 10px;
  border-radius: 2px;
  display: block;
  margin-left: 5px;
  margin-top: 5px;
  font-size: 14px;
  font-family: 'Roboto Regular';
  box-shadow: 0 0 1px black;
  background: ${props => props.color || `black`};
`

const RemoveButton = styled.span`
  cursor: pointer;
  padding: 0 5px;
  border-radius: 2px;
  border: 1px solid white;
  float: right;
`