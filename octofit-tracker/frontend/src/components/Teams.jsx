import ResourcePage from './ResourcePage.jsx'

function Teams() {
  return (
    <ResourcePage
      title="Teams"
      eyebrow="Groups"
      resourceName="teams"
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