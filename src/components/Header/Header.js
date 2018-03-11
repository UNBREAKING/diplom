import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Header = () =>
    <Wrapper>
        <ProjectName>
            InProject
        </ProjectName>
        <ClickbleWrapper>
        <LinkWrapper>
            <LinkButton to='/'>
                Home
            </LinkButton>
            <LinkButton to='/projects'>
                Projects
            </LinkButton>
            <LinkButton to='/projects'>
                Some Link
            </LinkButton>
        </LinkWrapper>
        <Button>
            Sign Up
        </Button>
        </ClickbleWrapper>
    </Wrapper>

export default Header

const Wrapper = styled.div`
    background: #003F61;
    padding: 10px 20px;
    vertical-align: middle;
`

const ProjectName = styled.span`
    color: white;
    font-size: 36px;
    font-family: 'Roboto Regular';
    font-weight: 700;
`

const LinkButton = styled(Link)`
    color: white;
    border-left: 2px solid white;
    font-size: 24px;
    font-family: 'Roboto Regular';
    margin-left: 20px;
    padding-left: 10px;
    text-decoration:none;
    cursor: pointer;

    :hover {
        border-left: 2px solid #E3E3E3;
        color: #E3E3E3;
    }
`

const LinkWrapper = styled.span`
    padding-right: 40px;
`

const ClickbleWrapper = styled.div`
    float: right;
`

const Button = styled.button`
    background: #000000;
    color: white;
    font-size: 20px;
    font-family: 'Roboto Regular';
    padding: 10px 10px;
    border: 1px solid #A6A6A6;
    border-radius: 7px;
    cursor: pointer;
    :hover {
        background: #041A3A;
    }
`