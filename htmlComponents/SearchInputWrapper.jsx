import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {PlayList} from './PlayList.jsx';

export class SearchInputWrapper extends React.Component {

   constructor(props) {
      super(props);
      this.state = {data: '',items:[]}
      this.updateState = this.updateState.bind(this);
   };

   updateState(e) {
        this.setState({data: e.target.value});

        var datos=null;

        var myRequest = new Request('http://api.deezer.com/search/artist?q='+e.target.value);
         fetch(myRequest)
         .then(function(response){
            return response.json()
         })
         .then(function(data){
            var idArtist=data.data[0].id;
            console.log('ID_ARTIST::::'+idArtist);
            var myRequestArtist = new Request('http://api.deezer.com//artist//'+idArtist+'//top?limit=100');
               fetch(myRequestArtist)
               .then(function(response){
                  return response.json()
               })
               .then(function(dataArtist){
                  ReactDOM.render(<PlayList lists = {dataArtist.data}></PlayList>,
                   document.getElementById('divLists'));
                  
               })
            
         })         
   }

   render() {
      return (
         <div><SearchInput myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></SearchInput>
               <br></br>
         </div>
      );
   }
}

class SearchInput extends React.Component {

   render() {
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />  &nbsp;&nbsp;
            <i className="fa fa-search" aria-hidden="true"></i>
            <br></br><br></br>
            <div>Albums:</div>
         </div>
      );
   }
}