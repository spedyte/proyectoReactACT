import React from 'react';

export class UserName extends React.Component {
  constructor(props)
  {
    super(props);
  }
  
  render() 
  {
      return <h2> {this.props.name}</h2>;
   }
}