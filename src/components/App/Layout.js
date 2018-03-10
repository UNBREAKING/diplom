import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { Header } from '../index'

class Layout extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { custom } = this.props
        return (
            <html>
                <head>
                    <title> InProject</title>
                </head>
                <Body>
                    <Header />
                    {this.props.children}
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src='../bundle/index.js' />
                </Body>
            </html>
        );
    }
}

const Body = styled.body`
    margin: 0;
    width: 100%;
    height: 100%;
`

const wrapper = connect(
    (state) => {
        return { custom: state };
    }
);

module.exports = wrapper(Layout);