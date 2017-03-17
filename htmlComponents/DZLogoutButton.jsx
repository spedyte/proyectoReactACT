import React from 'react';
import ReactDOM from 'react-dom';

export class DZLogoutButton extends React.Component {
  constructor(props)
  {
    super(props);
    this.logoutDeezer = this.logoutDeezer.bind(this);
  }
  
  logoutDeezer()
  {
    DZ.logout(function() {
      console.log('Good bye!');
       document.getElementById('titleUserName').innertHTML="";
       document.getElementById('divProfileUser').innertHTML="";
       document.getElementById('divImgUser').innertHTML="";
    });
  }

  render() 
  {
      return (
         <button onClick={this.logoutDeezer}>Logout</button>
      );
   }
}