import React from 'react'
import styled from 'styled-components'
import { ModalWindow, BlueButton } from '../../common'
import UserIcon from '../UserIcon'

const OffersModal = ({ 
  selectedOffer, 
  close, 
  nameOfSelectedJob, 
  numberOfOffers, 
  offers,
  selectedUserForOffer,
  selectUser,
  chooseUserForJob
}) =>
  Number.isInteger(selectedOffer) &&
    <ModalWindow
      width="700"
      header={`${numberOfOffers} Ping${numberOfOffers === 1 ? "" : "s" } For ${nameOfSelectedJob}`}
      closeHandler={close}>
      <Users>
        { 
          offers.map(({ 
            userId: {
              _id, 
              name: userName, 
              surname, 
              skill: {
                name
              }
            } 
          }) =>
            <User 
              key={`${userName}_${surname}`}
              selected={_id === selectedUserForOffer}
              onClick={() => selectUser(_id)}>
              <ImageContent>
                <UserIcon size="48" />
              </ImageContent>
              <Content>
                <UserName>
                  { `${userName} ${surname}` }
                </UserName>
                <CoreSkill>
                  <Label>
                    Core Skill:
                  </Label>
                  <Skill>
                    { name }
                  </Skill>
              </CoreSkill>
              </Content>
            </User>
          ) 
        }
      </Users>
      <ButtonWrapper>
        <BlueButton text="Select New Member"onClick={chooseUserForJob}/>
      </ButtonWrapper>
    </ModalWindow>

export default OffersModal

const ButtonWrapper = styled.div`
  text-align: right;
  padding: 20px 20px;
  border-top: 1px solid black;
`

const Users = styled.div`
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

const Content = styled.div`
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

const CoreSkill = styled.div`
  margin-top: 10px;
`

const Label = styled.span`
  font-family: 'Roboto Regular';
  font-size: 16px;
`

const Skill = styled.span`
  font-family: 'Roboto Regular';
  font-size: 16px;
  color: #003F61;
  margin-left: 5px;
`