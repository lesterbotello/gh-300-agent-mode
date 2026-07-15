import ResourcePage from './ResourcePage.jsx'

function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      eyebrow="Competition"
      resourceName="leaderboard"
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'username', label: 'User' },
        { key: 'points', label: 'Points' },
        { key: 'weeklyMinutes', label: 'Weekly Minutes' },
        { key: 'streakDays', label: 'Streak' },
      ]}
    />
  )
}

export default Leaderboard