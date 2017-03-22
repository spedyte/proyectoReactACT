import React from 'react';
import ReactDOM from 'react-dom';
import {UserName} from './UserName.jsx';
import {ProfileData} from './ProfileData.jsx';
import {UserImg} from './UserImg.jsx';
import {EmptyElement} from './EmpyElement.jsx';
import {SearchInputWrapper} from './SearchInputWrapper.jsx';
import {DZLogoutButton} from './DZLogoutButton.jsx';

export class DZLoginButton extends React.Component {
  constructor(props)
  {
    super(props);
    this.loginDeezer = this.loginDeezer.bind(this);
  }
  
  loginDeezer()
  {
    DZ.login(function(response) {
	    if (response.authResponse.accessToken) {
			console.log('Welcome!  Fetching your information.... ');
			console.log(response.authResponse);
			DZ.api('/user/me', function(response) {
				console.log(response);
				ReactDOM.render(<EmptyElement />, document.getElementById('divLoginButton'));
				ReactDOM.render(<UserName name={response.name}/>, document.getElementById('titleUserName'));
				ReactDOM.render(<ProfileData user={response}/>, document.getElementById('divProfileUser'));
				ReactDOM.render(<UserImg img={response.picture_medium}/>, document.getElementById('divImgUser'));
				ReactDOM.render(<SearchInputWrapper />, document.getElementById('divSearchInput'));
				ReactDOM.render(<DZLogoutButton />, document.getElementById('divLogoutButton'));
				DZ.player.playPlaylist(1111142361);
			});
		} else {
			console.log('User cancelled login or did not fully authorize.');
			ReactDOM.render(<EmptyElement />, document.getElementById('titleUserName'));
     		ReactDOM.render(<EmptyElement />, document.getElementById('divProfileUser'));
     		ReactDOM.render(<EmptyElement />, document.getElementById('divImgUser'));
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