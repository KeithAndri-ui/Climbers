import { useState } from 'react'
import '../styles/Routes.css'

function RoutesPage() {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      name: 'Eagle\'s Nest',
      location: 'Yosemite Valley, CA',
      difficulty: '5.10a',
      type: 'Sport',
      date: '2026-01-15',
      status: 'Completed',
      rating: 5
    },
    {
      id: 2,
      name: 'Dragon\'s Breath',
      location: 'Red River Gorge, KY',
      difficulty: '5.11c',
      type: 'Trad',
      date: '2026-01-20',
      status: 'Completed',
      rating: 4
    },
    {
      id: 3,
      name: 'Cloud Nine',
      location: 'Smith Rock, OR',
      difficulty: '5.9',
      type: 'Sport',
      date: '2026-01-25',
      status: 'In Progress',
      rating: 0
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    difficulty: '5.9',
    type: 'Sport',
    date: new Date().toISOString().split('T')[0],
    status: 'In Progress',
    rating: 0
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRoute = {
      id: routes.length + 1,
      ...formData,
      rating: parseInt(formData.rating)
    }
    setRoutes([...routes, newRoute])
    setFormData({
      name: '',
      location: '',
      difficulty: '5.9',
      type: 'Sport',
      date: new Date().toISOString().split('T')[0],
      status: 'In Progress',
      rating: 0
    })
    setShowForm(false)
  }

  const getDifficultyColor = (difficulty) => {
    const num = parseFloat(difficulty.replace('5.', ''))
    if (num < 10) return 'success'
    if (num < 12) return 'warning'
    return 'danger'
  }

  return (
    <div className="routes-page">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="page-title">My Climbing Routes</h1>
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : '+ Add Route'}
          </button>
        </div>

        {showForm && (
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Add New Route</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Route Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Difficulty</label>
                    <select
                      className="form-select"
                      name="difficulty"
                      value={formData.difficulty}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="5.9">5.9</option>
                      <option value="5.10a">5.10a</option>
                      <option value="5.10b">5.10b</option>
                      <option value="5.10c">5.10c</option>
                      <option value="5.10d">5.10d</option>
                      <option value="5.11a">5.11a</option>
                      <option value="5.11b">5.11b</option>
                      <option value="5.11c">5.11c</option>
                      <option value="5.11d">5.11d</option>
                      <option value="5.12a">5.12a</option>
                      <option value="5.12b">5.12b</option>
                      <option value="5.12c">5.12c</option>
                      <option value="5.12d">5.12d</option>
                      <option value="5.13a">5.13a</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Type</label>
                    <select
                      className="form-select"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Sport">Sport</option>
                      <option value="Trad">Trad</option>
                      <option value="Boulder">Boulder</option>
                      <option value="Ice">Ice</option>
                      <option value="Mixed">Mixed</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Attempted">Attempted</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Rating (1-5)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="rating"
                      min="0"
                      max="5"
                      value={formData.rating}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Route
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="routes-grid">
          {routes.map(route => (
            <div key={route.id} className="route-card card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h3 className="card-title mb-0">{route.name}</h3>
                  <span className={`badge bg-${getDifficultyColor(route.difficulty)}`}>
                    {route.difficulty}
                  </span>
                </div>
                <p className="text-muted mb-2">
                  <span className="location-icon">📍</span> {route.location}
                </p>
                <div className="route-details">
                  <span className="badge bg-secondary me-2">{route.type}</span>
                  <span className={`badge ${
                    route.status === 'Completed' ? 'bg-success' :
                    route.status === 'In Progress' ? 'bg-warning' : 'bg-danger'
                  }`}>
                    {route.status}
                  </span>
                </div>
                <div className="mt-3">
                  <small className="text-muted">Date: {route.date}</small>
                  {route.rating > 0 && (
                    <div className="mt-2">
                      <span className="text-warning">
                        {'⭐'.repeat(route.rating)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {routes.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No routes logged yet. Add your first route to get started!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RoutesPage
