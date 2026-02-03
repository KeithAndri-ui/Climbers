import '../styles/Community.css'

function Community() {
  const climbers = [
    {
      id: 1,
      name: 'Alex Johnson',
      location: 'Boulder, CO',
      level: 'Advanced',
      routes: 127,
      avatar: '🧗‍♂️'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      location: 'Seattle, WA',
      level: 'Expert',
      routes: 203,
      avatar: '🧗‍♀️'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      location: 'Portland, OR',
      level: 'Intermediate',
      routes: 89,
      avatar: '🧗'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      location: 'Salt Lake City, UT',
      level: 'Advanced',
      routes: 156,
      avatar: '🧗‍♀️'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      climber: 'Alex Johnson',
      action: 'completed',
      route: 'Eagle\'s Nest',
      difficulty: '5.10a',
      time: '2 hours ago'
    },
    {
      id: 2,
      climber: 'Sarah Chen',
      action: 'added',
      route: 'Dragon\'s Breath',
      difficulty: '5.11c',
      time: '5 hours ago'
    },
    {
      id: 3,
      climber: 'Mike Rodriguez',
      action: 'attempted',
      route: 'Cloud Nine',
      difficulty: '5.9',
      time: '1 day ago'
    }
  ]

  return (
    <div className="community-page">
      <div className="container py-5">
        <h1 className="page-title mb-4">Climbing Community</h1>

        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="card">
              <div className="card-header">
                <h3 className="mb-0">Recent Activity</h3>
              </div>
              <div className="card-body">
                <div className="activity-list">
                  {recentActivity.map(activity => (
                    <div key={activity.id} className="activity-item">
                      <div className="activity-avatar">
                        {activity.climber === 'Alex Johnson' ? '🧗‍♂️' :
                         activity.climber === 'Sarah Chen' ? '🧗‍♀️' :
                         activity.climber === 'Mike Rodriguez' ? '🧗' : '🧗‍♀️'}
                      </div>
                      <div className="activity-content">
                        <strong>{activity.climber}</strong> {activity.action}{' '}
                        <strong>{activity.route}</strong> ({activity.difficulty})
                        <div className="activity-time">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">
                <h3 className="mb-0">Top Climbers</h3>
              </div>
              <div className="card-body">
                <div className="climbers-list">
                  {climbers.map((climber, index) => (
                    <div key={climber.id} className="climber-item">
                      <div className="climber-rank">#{index + 1}</div>
                      <div className="climber-avatar">{climber.avatar}</div>
                      <div className="climber-info">
                        <div className="climber-name">{climber.name}</div>
                        <div className="climber-details">
                          <span className="climber-location">📍 {climber.location}</span>
                          <span className="climber-level badge bg-info">{climber.level}</span>
                        </div>
                        <div className="climber-routes">{climber.routes} routes</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body text-center">
                <h3>Join the Conversation</h3>
                <p className="text-muted mb-4">
                  Connect with climbers, share tips, and find climbing partners
                </p>
                <div className="community-features">
                  <div className="feature-item">
                    <div className="feature-icon">💬</div>
                    <h4>Forums</h4>
                    <p>Discuss routes, techniques, and gear</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📸</div>
                    <h4>Share Photos</h4>
                    <p>Show off your climbing achievements</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🤝</div>
                    <h4>Find Partners</h4>
                    <p>Connect with climbers in your area</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🏆</div>
                    <h4>Challenges</h4>
                    <p>Participate in climbing challenges</p>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg mt-4">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
