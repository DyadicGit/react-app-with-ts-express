let posts = new Map();

export interface Post {
  id: string
  title: string
  content: string
}
export type PostList = Post[]

const add = (data: Post) => {
  if (posts.has(data.id)) {
    throw Error('already exists')
  }
  posts.set(data.id, data)
}
const remove = (id: string) => posts.delete(id)
const set = (id: string, data: Post) => posts.set(id, data)
const get = (id: string): Post => posts.get(id)
const all = (): PostList => Array.from(posts.values())

const init = async () => {
  const initPosts = await import('./db.json')
  posts = new Map(initPosts.posts.map(s => [s.id, s]))
}
init()

const storage = { posts: { add, get, remove, set, all }}

export default storage
