import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPosts} from '../actions/postActions';

 class Posts extends Component {


componentWillMount(){
    this.props.fetchPosts();
}

componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            //adding to beginnning of array , if use push it adds to end of array
            this.props.posts.unshift(nextProps.newPost)
        }
}

    // componentWillMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // }

    //  async componentWillMount(){
    //        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data =await res.json();
    //        this.setState({posts: data});
    //     }
  render() {
      const postItems = this.props.posts.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            </div>
      ));
    return (
      <div>
        <h1>Posts </h1>
        {postItems}
      </div>
    )
  }
}

Posts.propType = {
    fetchPosts: PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts : state.posts.items,
    newPost : state.posts.item
})
export default connect(mapStateToProps, {fetchPosts})(Posts);