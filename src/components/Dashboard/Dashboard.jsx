import React, { useState, useEffect } from 'react'
import TaskForm from '../TaskForm/TaskForm'
import TaskFilter from '../TaskFilter/TaskFilter'
import TaskList from '../TaskList/TaskList'
import { filterTasks, sortTasks } from '../../utils/taskUtils'

export default function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: '',
    sortBy: 'created'
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAdd = ({ title, priority }) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      priority,
      status: 'todo',
      createdAt: new Date().toISOString()
    }
    setTasks([newTask, ...tasks])
  }

  const handleToggle = id => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, status: t.status === 'todo' ? 'done' : 'todo' } : t
    ))
  }

  const handleDelete = id => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const visible = sortTasks(filterTasks(tasks, filters), filters.sortBy)

  const stats = {
    total: tasks.length,
    done: tasks.filter(t => t.status === 'done').length,
    todo: tasks.filter(t => t.status === 'todo').length
  }

  return (
    <>
      <aside className="stats card">
        <h2>Task Dashboard</h2>
        <p>Total: {stats.total}</p>
        <p>To Do: {stats.todo}</p>
        <p>Done: {stats.done}</p>
      </aside>

      <main>
        <TaskForm onAdd={handleAdd} />

        <div className="filters">
          <TaskFilter filters={filters} onChange={setFilters} />
        </div>

        <div className="tasks">
          <TaskList tasks={visible} onToggle={handleToggle} onDelete={handleDelete} />
        </div>
      </main>
    </>
  )
}
