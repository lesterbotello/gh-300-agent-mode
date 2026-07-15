import { API_ENDPOINTS } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

const teamsEndpointUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <ResourcePage
      title="Teams"
      eyebrow="Groups"
      resourceName={API_ENDPOINTS.teams}
      endpointUrl={teamsEndpointUrl}
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'city', label: 'City' },
        { key: 'weeklyGoalMinutes', label: 'Weekly Goal' },
        { key: 'memberUsernames', label: 'Members' },
        { key: 'description', label: 'Description' },
      ]}
    />
  )
}

export default Teams