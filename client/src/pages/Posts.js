import React from 'react'
import bulma from '../components/bulma.module.scss'
import cx from 'classnames'

const Posts = ({posts}) => {
  return <ul className={cx(bulma.list, bulma.content)}>{
      posts
        ? posts.map((post, index) => (<li key={index}><h6><span>{index+1}.</span> {post.title}</h6><blockquote>{post.content}</blockquote></li>))
      : 'nothing here'
    }</ul>
}

export default Posts
