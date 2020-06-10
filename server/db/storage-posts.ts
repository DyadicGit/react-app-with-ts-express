let posts: Map<string, Post> = new Map();

export interface Post {
  id: number
  title: string
  content: string
}
export type PostList = Post[]

const add = (data: Post) => {
  if (posts.has(data.id.toString())) {
    throw Error('already exists')
  }
  posts.set(data.id.toString(), data)
}
const remove = (id) => posts.delete(id.toString())
const set = (id, data: Post) => posts.set(id.toString(), data)
const get = (id): Post => posts.get(id.toString())
const all = (): PostList => Array.from(posts.values())

const init = async () => {
  const initPosts = await import('./db.json')
  posts = new Map<string, Post>(initPosts.posts.map(s => [s.id.toString(), s]))
}
init()

const storage = { posts: { add, get, remove, set, all }}

export default storage
