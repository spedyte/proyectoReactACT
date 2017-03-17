import React from 'react';
import ReactDOM from 'react-dom';
import {UserName} from './UserName.jsx';
import {ProfileData} from './ProfileData.jsx';
import {UserImg} from './UserImg.jsx';

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
				console.log(response);
				ReactDOM.render(<UserName name={response.name}/>, document.getElementById('titleUserName'));
				ReactDOM.render(<ProfileData user={response}/>, document.getElementById('divProfileUser'));
				ReactDOM.render(<UserImg img={response.picture_medium}/>, document.getElementById('divImgUser'));
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