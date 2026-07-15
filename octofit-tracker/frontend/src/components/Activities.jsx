import { API_ENDPOINTS } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

const activitiesEndpointUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function formatDate(value) {
  return value ? new Date(value).toLocaleDateString() : '—'
}

function Activities() {
  return (
    <ResourcePage
      title="Activities"
      eyebrow="Training Log"
      resourceName={API_ENDPOINTS.activities}
      endpointUrl={activitiesEndpointUrl}
      columns={[
        { key: 'username', label: 'User' },
        { key: 'activityType', label: 'Activity' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
        { key: 'activityDate', label: 'Date', render: (activity) => formatDate(activity.activityDate) },
        { key: 'notes', label: 'Notes' },
      ]}
    />
  )
}

export default Activities