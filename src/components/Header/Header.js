import React from 'react'
import styled from 'styled-components'

const Header = () =>
    <Wrapper>
        <ProjectName>
            InProject
        </ProjectName>
        <ClickbleWrapper>
        <LinkWrapper>
            <Link>
                Home
            </Link>
            <Link>
                Projects
            </Link>
            <Link>
                Some Link
            </Link>
        </LinkWrapper>
        <Button>
            Sign Up
        </Button>
        </ClickbleWrapper>
    </Wrapper>

export default Header

const Wrapper = styled.div`
    background: #4A9DE8;
    padding: 10px 20px;
    vertical-align: middle;
`

const ProjectName = styled.span`
    color: white;
    font-size: 36px;
`

const Link = styled.span`
    color: white;
    border-left: 2px solid white;
    font-size: 24px;
    margin-left: 20px;
    padding-left: 10px;
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
    background: #143057;
    color: white;
    font-size: 20px;
    padding: 10px 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        background: #041A3A;
    }
`