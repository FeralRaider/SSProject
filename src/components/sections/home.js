import React from 'react';
import { NodeGroup } from 'react-move';
import Post from '../blog/post';


class Home extends React.Component {

   constructor(props) {
      super(props);
  }
  
    render() {
       return (
          <div id="section_content">
            <div className="layer">
               <div id="fading" onClick={() => {this.props.navigation("Contact")}}>
                  <p>
                     {this.props.stateData.path}
                  </p>
               </div>
               <div className="row">
                  <Post navigation={() => {this.props.navigation("Contact")}}></Post>
                  <Post navigation={() => {this.props.navigation("Contact")}}></Post>
               </div>
               <div className="row">
                  <Post navigation={() => {this.props.navigation("Contact")}}></Post>
                  <Post navigation={() => {this.props.navigation("Contact")}}></Post>
               </div>
            </div>          
          </div>
       );
    }
 }

 export default Home;