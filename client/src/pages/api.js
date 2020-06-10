const { REACT_APP_API_URL: apiUrl } = process.env

export const apiGetPostList = async () => {
  const resp = await fetch(`${apiUrl}/posts`)
  if (!resp.ok) throw Error('get list error')
  return await resp.json()
}

export const apiGetPost = async (id) => {
  const resp = await fetch(`${apiUrl}/posts/${encodeURIComponent(id)}`)
  if (!resp.ok) throw Error('get specific error')
  return await resp.json()
}
export const apiDeletePost = async (id) => {
  const resp = await fetch(`${apiUrl}/posts/${encodeURIComponent(id)}`, {method: 'DELETE'})
  if (!resp.ok) throw Error('get specific error')
  return await resp.json()
}
export const apiUpdatePost = async (post) => {
  const resp = await fetch(`${apiUrl}/posts/${encodeURIComponent(post.id)}`, { headers: {'Content-Type': 'application/json' }, method: 'PATCH', body: JSON.stringify(post)})
  if (!resp.ok) throw Error('update error')
  return await resp.json()
}

export const apiAddPost = async (post) => {
  const resp = await fetch(`${apiUrl}/posts`, { headers: {'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify(post)})
  if (!resp.ok) throw Error('add error')
  return await resp.json()
}
