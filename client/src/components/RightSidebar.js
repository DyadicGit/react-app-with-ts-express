import React, { useEffect, useState } from 'react'
import bulma from '../components/bulma.module.scss'
import cx from 'classnames'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const uuid = () => getRandomInt(100000000)

const RightSidebar = ({ onSubmitEdit, onSubmitCreate, selectedToEdit }) => {
  const [form, setForm] = useState(selectedToEdit)
  const [mode, setMode] = useState()
  useEffect(() => {
    setForm(selectedToEdit)
    setMode('EDIT')
  }, [selectedToEdit])

  const setTitle = (title) => setForm((form) => ({ ...form, title: title }))
  const setContent = (content) => setForm((form) => ({ ...form, content: content }))

  const sendToEdit = async (e) => {
    e.preventDefault()
    onSubmitEdit({ ...form, id: selectedToEdit.id })
    setMode(null)
  }
  const sendToCreate = async (e) => {
    e.preventDefault()
    onSubmitCreate({ ...form, id: uuid(), })
    setForm(null)
    setMode(null)
  }

  return (
    <>
      <button
        type="input"
        className={cx(bulma.button, bulma['is-fullwidth'], bulma['is-primary'])}
        onClick={() => {
          setForm({ title: '', content: '' })
          setMode('NEW')
        }}
        disabled={mode === 'NEW'}
      >
        new
      </button>
      {form && (
        <form className={bulma.form} onSubmit={mode === 'EDIT' ? sendToEdit : sendToCreate}>
          <label htmlFor="title">title</label>
          <input type="text" className={bulma.input} id="title" value={form.title} onChange={(e) => setTitle(e.target.value)}/>
          <label htmlFor="content">content</label>
          <input type="text" className={bulma.input} id="content" value={form.content} onChange={(e) => setContent(e.target.value)}/>
          <button className={bulma.button}>DONE</button>
        </form>
      )}
    </>
  )
}

export default RightSidebar
