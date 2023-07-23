import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInput, setTasks, deleteTask, editTask, setComplet } from "./Slice"
import { CheckBox, Delete, Edit } from '@mui/icons-material'
import "./home.css"

function Home() {
  const dispatch = useDispatch()
  const init = useSelector((state) => { return state.todo })

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setTasks())
  }
  function handleDelete(e, id) {
    e.preventDefault()
    dispatch(deleteTask(id))
  }

  function handleEdit(e, id) {
    e.preventDefault()
    dispatch(editTask(id))
  }

  function handleComplet(e, id) {
    e.preventDefault()
    dispatch(setComplet(id))
  }

  return (
    <>
      <div className='wrepper'>
        <form onSubmit={handleSubmit}>
          <input type="text" value={init.input} onChange={(e) => dispatch(setInput(e.target.value))} autoFocus />
          <button type='submit'>Add Li</button>
        </form>
        <ul>
          {
            init.tasks.map((task, id) => {
              return (
                <li key={id} className={init.complet.includes(id) ? 'completed' : ''}>
                  {task}
                  <a href='' onClick={(e) => handleDelete(e, id)}><Delete /></a>
                  <a href='' onClick={(e) => handleEdit(e, id)}><Edit /></a>
                  <a href='' onClick={(e) => handleComplet(e, id)}><CheckBox /></a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Home