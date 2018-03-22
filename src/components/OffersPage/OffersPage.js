import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ItemBlock, OfferBlock } from '../index'

const OffersPage = () => 
  <Wrapper>
    <OfferBlock name="Add Offer For Your Project" />
    <OfferBlock name="Leave Offer For Proffesion You Are Interested In"/>
    <ItemBlock name="OFFERS" />
  </Wrapper>

export default OffersPage

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`