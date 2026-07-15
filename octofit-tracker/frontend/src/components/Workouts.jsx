import { API_ENDPOINTS } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

const workoutsEndpointUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      eyebrow="Suggestions"
      resourceName={API_ENDPOINTS.workouts}
      endpointUrl={workoutsEndpointUrl}
      columns={[
        { key: 'title', label: 'Workout' },
        { key: 'focusArea', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'estimatedMinutes', label: 'Minutes' },
        { key: 'exercises', label: 'Exercises' },
      ]}
    />
  )
}

export default Workouts