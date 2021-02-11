import * as React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core';
import Demo from './demo';

ReactDOM.render(
  <StylesProvider injectFirst>
    <Demo />
  </StylesProvider>,
  document.querySelector("#root")
);