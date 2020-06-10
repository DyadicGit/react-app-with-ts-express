import React from 'react'

const toTableRow = ({ id, title, content, onDelete, onEdit }) => (
  <tr key={id}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{content}</td>
    <td>
      <button onClick={() => onDelete(id)}>Delete</button>
    </td>
    <td>
      <button onClick={() => onEdit(id)}>Edit</button>
    </td>
  </tr>
)

const AddPost = ({ posts, onDelete, onEdit }) => {
  return (
    <>
      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>content</th>
        </tr>
        </thead>
        <tbody>
        {posts
          ? posts.map(
            (post) => toTableRow({ ...post, onDelete, onEdit })
          )
          : 'Nothing yet'}
        </tbody>
      </table>
    </>
  );
}

export default AddPost
