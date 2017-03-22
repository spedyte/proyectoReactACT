import React from 'react';

export class PlayList extends React.Component {
  constructor(props)
  {
    super(props);
    this.playList = this.playList.bind(this);
  }
  playList(idList)
  {
    console.log('load album... '+idList);
    DZ.player.playAlbum(idList); 
    console.log('finish load album... '+idList);
  }
  render() 
  {
    console.log(this.props.lists);
     return(             
      <div>
            { this.props.lists.map(item=> { 
                  return (<div className="w3-container">

                             <h6 className="w3-text-teal" onClick={this.playList.bind(this,item.album.id)}>
                                 <img src={item.album.cover_small} ></img>
                                 <i className="fa fa-play-circle fa-fw w3-margin-right"></i>
                                 {item.album.title}
                             </h6>
                          </div>);
                }) }          
      </div>);
   }
}
