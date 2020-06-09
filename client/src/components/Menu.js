import React from 'react'
import { Link } from 'react-router-dom'
import { menuLabel, menuList } from './bulma.module.scss'

const Menu = () => {
  return (
    <>
      <p className={menuLabel}>Menu</p>
      <ul className={menuList}> {/*seems bulma is not very modular*/}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/add-post">Add Post</Link></li>
      </ul>
    </>
  )
}

export default Menu
