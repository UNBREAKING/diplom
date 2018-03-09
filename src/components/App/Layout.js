import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  { Header} from '../index'

class Layout extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick() {
        alert(this.props.custom.title);
    }
    render() {
        const { custom } = this.props
        return (
            <html>
                <head>
                    <title> InProject</title>
                </head>
                <body>
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
                    <script src='/index.js' />
                </body>
            </html>
        );
    }
}

const wrapper = connect(
    (state) => {
        return { custom: state };
    }
);

module.exports = wrapper(Layout);