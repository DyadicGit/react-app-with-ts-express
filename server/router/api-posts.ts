import express, { json } from 'express'
import storage, { Post } from '../db/storage-posts'
const postsApi = express()

postsApi.get('/posts', (req, res) => {
  res.json(storage.posts.all())
})

postsApi.get('/posts/:id', (req, res) => {
  res.json(storage.posts.get(req.params.id))
})

postsApi.delete('/posts/:id', (req, res) => {
  res.send(storage.posts.remove(req.params.id))
})

postsApi.post('/posts', json, (req, res) => {
  const post: Post = req.body
  try {
    storage.posts.add(post)
    res.json(storage.posts.get(post.id))
  } catch (e) {
    res.send('ALREADY EXISTS')
  }
})

postsApi.patch('/posts/:id', json, (req, res) => {
  const { body } = req
  delete body.id

  const existing = storage.posts.get(req.params.id)
  if (!existing) return res.send('NO ENTRY')

  const modified
    = Object.getOwnPropertyNames(existing)
    .reduce(
      (acc, attr) => ({ ...acc, [attr]: body[attr] || existing[attr] }),
      existing)

  storage.posts.set(existing.id, modified)

  res.json(modified)
})

export { postsApi }
