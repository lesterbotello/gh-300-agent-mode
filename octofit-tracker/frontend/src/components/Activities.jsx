import { API_ENDPOINTS } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

function formatDate(value) {
  return value ? new Date(value).toLocaleDateString() : '—'
}

function Activities() {
  return (
    <ResourcePage
      title="Activities"
      eyebrow="Training Log"
      resourceName={API_ENDPOINTS.activities}
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