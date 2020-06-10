import React from 'react'

const Posts = ({posts}) => {
  return <ul>{
      posts
      ? posts.map(post => (<li key={post.id}>id: {post.id}&emsp; title:{post.title}&emsp; content: {post.content}</li>))
      : 'nothing here'
    }</ul>
}

export default Posts
