// filter by status, priority, and search text
export function filterTasks(tasks, { status, priority, search }) {
  return tasks.filter(task => {
    if (status !== 'all' && task.status !== status) return false
    if (priority !== 'all' && task.priority !== priority) return false
    if (search && !task.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })
}

// sort by creation date or priority
export function sortTasks(tasks, sortBy) {
  return [...tasks].sort((a, b) => {
    if (sortBy === 'created') {
      return new Date(b.createdAt) - new Date(a.createdAt)
    }
    if (sortBy === 'priority') {
      const order = { high: 1, medium: 2, low: 3 }
      return order[a.priority] - order[b.priority]
    }
    return 0
  })
}
