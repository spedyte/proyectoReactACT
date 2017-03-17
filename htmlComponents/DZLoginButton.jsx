import React from 'react';

export class DZLoginButton extends React.Component {
  constructor(props)
  {
    super(props);
    this.loginDeezer = this.loginDeezer.bind(this);
  }
  
  loginDeezer()
  {
    DZ.login(function(response) {
		if (response.authResponse) {
			console.log('Welcome!  Fetching your information.... ');
			DZ.api('/user/me', function(response) {
				console.log('Good to see you, ' + response.name + '.');
				console.log(response);
			});
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	}, {perms: 'basic_access,email'});
  }

  render() 
  {
      return (
         <button onClick={this.loginDeezer}>Login to DEEZER</button>
      );
   }
}