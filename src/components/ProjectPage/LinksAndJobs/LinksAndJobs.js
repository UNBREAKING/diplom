import React from 'react'
import styled from 'styled-components'
import UserIcon from './UserIcon'

/*
<ImageContent>
                <UserIcon />
              </ImageContent>
              const ImageContent = styled.span`

`
*/

const LinksAndJobs = ({ git, facebook, freeJobs, sendOffer, user_token, owner }) =>
  <Wrapper>
    <Links>
      <Label>
        Links
      </Label>
      <Content>
        <Link>
          <Name>
            Github:
          </Name>
          <NavigationLink href={git} target="_blank">
            {git}
          </NavigationLink>
        </Link>
        <Link>
          <Name>
            Facebook:
          </Name>
          <NavigationLink href={facebook} target="_blank">
            {facebook}
          </NavigationLink>
        </Link>
      </Content>
    </Links>
    <Jobs>
      <Label>
        Offers
      </Label>
      <JobsContent>
        {
          freeJobs.map(({ _id: offerId , jobId: { _id, name }}, index) =>
            <Job key={`${offerId}_${_id}_${index}`}>
              <Name>
                {name}
              </Name>
              {
                user_token &&
                  <Offers>
                    { 
                      user_token !== owner &&
                        <MakeOffer onClick={() => sendOffer(offerId)}>
                          ping for a job
                        </MakeOffer>
                    }
                  </Offers>
              }
            </Job>  
          )
        }
      </JobsContent>
    </Jobs>
  </Wrapper>

export default LinksAndJobs

const Wrapper = styled.div`
  margin-top: 20px;
  display: table;
  width: 100%;
`

const Links = styled.div`
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
  box-shadow: 0 0 1px black;
  padding: 10px;
`

const Jobs = styled.div`
  display: table-cell;
  width: 50%;
  padding-left:20px;
`

const JobsContent = styled.div`
  background: #F7F7F7;
  box-shadow: 0 0 1px black;
  overflow-y: scroll;
  width: 100%;
  height: 400px;
  padding: 0px 10px 10px;
`

const Job = styled.div`
  background: #CFCFCF;
  box-shadow: 0 0 1px black;
  padding: 10px 10px;
  margin-top: 10px;
`
const Name = styled.span`
  font-size: 16px;
  font-family: 'Roboto Regular';
  margin-left: 10px;
  color: #003F61;
`
const Link = styled.div`
  box-shadow: 0 0 1px black;
  padding: 5px 5px;
  margin-top: 10px;
`
const NavigationLink = styled.a`
  margin-left: 10px;
  color: #003F61;
`

const Offers = styled.div`
  float: right;
  font-size: 14px;
  font-family: 'Roboto Regular';
  color: #003F61;
  text-decoration: underline;
  cursor: pointer;
`
const MakeOffer = styled.div`
`