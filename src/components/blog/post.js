import React, { Component } from 'react';

class Post extends React.Component {
    render() {
       return (
          <div className="column" onClick={this.props.navigation}>
             <h1>Post</h1>
          </div>
       );
    }
 }

 export default Post;