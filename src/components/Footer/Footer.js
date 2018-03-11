import React from 'react'
import styled from 'styled-components'

const Footer = () => 
    <Wrapper>
        <ContentWithLogo>
            <ProjectName href="https://github.com/UNBREAKING/diplom">
                InProject
            </ProjectName>
        </ContentWithLogo>
        <Content>
            <Header>
                About Us
            </Header>
            <Description>
                Small application for creating projects with different technologies. Here you can be a big part of good startups.
            </Description>
        </Content>
        <Content>
            <Header>
                Personal Information
            </Header>
            <Description>
                { `Was created by ` }
                <Link href="https://vk.com/unbreaking">Aliaksei Paseishvili</Link>
                { ` for ` }
                <Link href="https://www.bsu.by/">BSU</Link>.
            </Description>
        </Content>
    </Wrapper>

export default Footer

const Wrapper = styled.div`
    background: #003F61;
    display: table;
    width: 100%;
    border-top: 1px solid #E3E3E3;
`

const Content = styled.div`
    width: 33.3333%;
    display: table-cell;
    text-align: center;
    padding: 20px 0;
`

const ContentWithLogo = styled(Content)`
    vertical-align: middle;
`

const ProjectName = styled.a`
    color: white;
    font-size: 46px;
    font-family: 'Roboto Regular';
    font-weight: 700;
    text-decoration: none;

    :hover {
        color: #E3E3E3;
    }
`

const Header = styled.div`
    font-family: 'Roboto Regular';
    color: white;
    font-weight: 500;
    font-size: 30px;
    vertical-align: text-top;
`

const Description = styled.div`
    font-family: 'Roboto Light';
    color: white;
    font-weight: 400;
    
    font-size: 20px;
`

const Link = styled.a`
    color: white;
    text-decoration: none;
    
    :hover {
        color: #E3E3E3;
    }
`