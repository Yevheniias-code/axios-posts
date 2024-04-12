import React from 'react';
import axios from 'axios'
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then( res => {
      const posts = res.data;
      this.setState({posts})
    })
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => <p key={post.id}>{post.title}
        <span> {post.body}</span></p>)}
      </div>
    );
  }
  
}

export default App;
