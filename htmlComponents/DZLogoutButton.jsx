import React from 'react';
import ReactDOM from 'react-dom';
import {EmptyElement} from './EmpyElement.jsx';
import {DZLoginButton} from './DZLoginButton.jsx';

export class DZLogoutButton extends React.Component {
  constructor(props)
  {
    super(props);
    this.logoutDeezer = this.logoutDeezer.bind(this);
  }
  
  logoutDeezer()
  {
    DZ.logout(function() {
      console.log('Closing session!');
      ReactDOM.render(<EmptyElement />, document.getElementById('titleUserName'));
      ReactDOM.render(<EmptyElement />, document.getElementById('divProfileUser'));
      ReactDOM.render(<EmptyElement />, document.getElementById('divImgUser'));
      ReactDOM.render(<EmptyElement />, document.getElementById('divLists'));
      ReactDOM.render(<DZLoginButton />, document.getElementById('divLogoutButton'));
      DZ.player.pause();
    });
  }

  render() 
  {
      return (
         <button onClick={this.logoutDeezer}>Logout</button>
      );
   }
}