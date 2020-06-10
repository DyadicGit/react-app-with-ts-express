import React, { useEffect, useState } from 'react'

const RightSidebar = ({ onSubmit, selectedToEdit }) => {
  const [form, setForm] = useState(selectedToEdit)
  useEffect(() => {
    setForm(selectedToEdit)
  }, [selectedToEdit])

  const setTitle = (title) => setForm((form) => ({ ...form, title: title }))
  const setContent = (content) => setForm((form) => ({ ...form, content: content }))

  const sendToEdit = async (e) => {
    e.preventDefault()
    onSubmit({ id: selectedToEdit.id, ...form })
  }

  return (
    <>
      {form && (
        <form onSubmit={sendToEdit}>
          <input type="text" name="name" title="name" value={form.title} onChange={(e) => setTitle(e.target.value)}/>
          <input type="text" name="content" title="content" value={form.content}
                 onChange={(e) => setContent(e.target.value)}/>
          <button>DONE</button>
        </form>
      )}
    </>
  )
}

export default RightSidebar
