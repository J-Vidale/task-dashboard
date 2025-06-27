import React, { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title.trim()) {
      setError('Title is required.')
      return
    }
    onAdd({ title, priority })
    setTitle('')
    setPriority('medium')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ marginBottom: '2rem' }}>
      {error && <p style={{ color: 'red', marginBottom: '0.5rem' }}>{error}</p>}

      <div className="form-group">
        <input
          id="task-title"
          type="text"
          placeholder=" "
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="task-title">Task Title</label>
      </div>

      <div className="form-group">
        <select
          id="task-priority"
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <label htmlFor="task-priority">Priority</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  )
}
