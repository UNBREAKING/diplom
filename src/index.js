import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import Application from './Application'

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);


injectGlobal`
  @font-face {
    font-family: 'Roboto Regular';
    src: url('../fonts/Roboto-Regular.ttf');
  }
  @font-face {
    font-family: 'Roboto Light';
    src: url('../fonts/Roboto-Light.ttf')
  }

  body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`