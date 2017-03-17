import React from 'react';

export class ProfileData extends React.Component {
  constructor(props)
  {
    super(props);
  }
  
  render() 
  {
     return( <div> 
     	<p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.user.inscription_date}</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.user.country}</p>
          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.user.email}</p>
          <p><i className="fa fa-id-card fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.user.id}</p>
          </div>
     	);
   }
}


