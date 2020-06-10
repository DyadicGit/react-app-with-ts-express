import React, { useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import AddPost from './pages/AddPost'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import RightSidebar from './components/RightSidebar'
import { apiAddPost, apiDeletePost, apiGetPost, apiGetPostList, apiUpdatePost } from "./pages/api";
import cx from 'classnames'
import bulma from './components/bulma.module.scss'
import styles from './App-styles.module.scss'

function init(posts) {
  return { posts: posts };
}

function postReducer(state, action) {
  switch (action.type) {
    case 'LOAD':
      return init(action.payload)
    case 'ADD':
      return { posts: state.posts.concat(action.payload) };
    case 'UPDATE':
      return { posts: state.posts.map(s => s.id === action.payload.id ? { ...s, ...action.payload } : s) };
    case 'DELETE':
      return { posts: state.posts.filter(s => s.id !== action.payload) };
    case 'SELECT':
      return { ...state, selected: action.payload }
    default:
      throw new Error();
  }
}

const usePost = () => {
  const [state, dispatch] = useReducer(postReducer, [], init);

  const deletePost = (id) => apiDeletePost(id).then(() => dispatch({ type: 'DELETE', payload: id }))
  const loadPostList = (onFinally) => apiGetPostList().then((posts) => dispatch({ type: 'LOAD', payload: posts })).finally(onFinally)
  const selectToEdit = (id) => apiGetPost(id).then((post) => dispatch({ type: 'SELECT', payload: post }))
  const updatePost = (post) => apiUpdatePost(post).then(post => dispatch({ type: 'UPDATE', payload: post }))
  const createPost = (post) => apiAddPost(post).then(post => dispatch({ type: 'ADD', payload: post }))
  return { state, dispatch: { deletePost, loadPostList, selectToEdit, updatePost, createPost } }
}

function App() {
  const { state, dispatch } = usePost()

  useEffect(() => {
    dispatch.loadPostList()
  }, [])

  return (
    <Router>
      <Header/>
      <aside className={cx(bulma.menu, styles.menu)}>
        <Menu/>
      </aside>
      <main>
        <Route exact path="/" component={Home}/>
        <Route exact path="/posts" component={(props) => Posts({...props, posts: state.posts})}/>
        <Route exact path="/add-post"
               component={
                 (props) =>
                   <AddPost
                     {...props}
                     posts={state.posts}
                     onDelete={dispatch.deletePost}
                     onEdit={dispatch.selectToEdit}
                   />}
        />
      </main>
      <aside className={cx(styles.rightSideBar, 'wtf')}>
        <RightSidebar onSubmitEdit={dispatch.updatePost} onSubmitCreate={dispatch.createPost} selectedToEdit={state.selected}/>
      </aside>
      <Footer />
    </Router>
  )
}

export default App
