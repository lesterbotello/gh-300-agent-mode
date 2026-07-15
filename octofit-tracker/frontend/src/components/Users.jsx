import ResourcePage from './ResourcePage.jsx'

function Users() {
  return (
    <ResourcePage
      title="Users"
      eyebrow="Profiles"
      resourceName="users"
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