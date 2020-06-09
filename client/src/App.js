import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import AddPost from './pages/AddPost'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import RightSidebar from './components/RightSidebar'
import { menu } from './components/bulma.module.scss'
import styles from './App-styles.module.scss'
import cx from 'classnames'

function App() {
  return (
    <Router>
      <Header />
      <aside className={cx(menu, styles.menu)}>
        <Menu />
      </aside>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/add-post" component={AddPost} />
      </main>
      <aside className={styles.rightSideBar}>
        <RightSidebar />
      </aside>
      <Footer />
    </Router>
  )
}

export default App
