import React from 'react';

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
    });
  }

  render() 
  {
      return (
         <button onClick={this.logoutDeezer}>Logout</button>
      );
   }
}