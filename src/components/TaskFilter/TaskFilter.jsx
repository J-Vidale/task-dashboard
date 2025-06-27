import React from 'react'

export default function TaskFilter({ filters, onChange }) {
  const { status, priority, search, sortBy } = filters

  const handle = (field, value) => {
    onChange({ ...filters, [field]: value })
  }

  return (
    <>
      <select value={status} onChange={e => handle('status', e.target.value)}>
        <option value="all">All Statuses</option>
        <option value="todo">To Do</option>
        <option value="done">Done</option>
      </select>

      <select value={priority} onChange={e => handle('priority', e.target.value)}>
        <option value="all">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => handle('search', e.target.value)}
      />

      <select value={sortBy} onChange={e => handle('sortBy', e.target.value)}>
        <option value="created">Newest First</option>
        <option value="priority">By Priority</option>
      </select>
    </>
  )
}
