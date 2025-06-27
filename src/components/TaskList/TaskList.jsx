import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>No tasks to show.</p>
  }
  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}
