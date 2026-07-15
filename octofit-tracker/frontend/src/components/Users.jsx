import { API_ENDPOINTS } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

const usersEndpointUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <ResourcePage
      title="Users"
      eyebrow="Profiles"
      resourceName={API_ENDPOINTS.users}
      endpointUrl={usersEndpointUrl}
      columns={[
        { key: 'username', label: 'Username' },
        { key: 'name', label: 'Name', render: (user) => `${user.firstName} ${user.lastName}` },
        { key: 'email', label: 'Email' },
        { key: 'fitnessLevel', label: 'Fitness Level', render: (user) => user.profile?.fitnessLevel },
        { key: 'primaryGoal', label: 'Primary Goal', render: (user) => user.profile?.primaryGoal },
      ]}
    />
  )
}

export default Users