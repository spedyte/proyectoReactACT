import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.jsx';
import {DZLoginButton} from './htmlComponents/DZLoginButton.jsx';
import {DZLogoutButton} from './htmlComponents/DZLogoutButton.jsx';

//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<DZLoginButton />, document.getElementById('divLoginButton'));
ReactDOM.render(<DZLogoutButton />, document.getElementById('divLogoutButton'));