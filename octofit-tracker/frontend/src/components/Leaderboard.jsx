import { API_ENDPOINTS } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

const leaderboardEndpointUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      eyebrow="Competition"
      resourceName={API_ENDPOINTS.leaderboard}
      endpointUrl={leaderboardEndpointUrl}
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