import React from 'react';

let styles = {
  width:'300px',
  alt:'Avatar'
}

export class UserImg extends React.Component {
  constructor(props)
  {
    super(props);
  }
  
  render() 
  {
  	console.log(this.props.img);
     return( <img src={this.props.img} style={styles}></img>
     	);
   }
}






          

