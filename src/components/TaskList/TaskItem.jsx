import React from 'react'

export default function TaskItem({ task, onToggle, onDelete }) {
  const classes = `task ${task.priority} ${task.status === 'done' ? 'done' : ''}`

  return (
    <div className={classes}>
      <div>
        <h3>{task.title}</h3>
        <p className="meta">Created: {new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
      <div className="actions">
        <button onClick={() => onToggle(task.id)} className="btn">
          {task.status === 'done' ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => onDelete(task.id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  )
}
