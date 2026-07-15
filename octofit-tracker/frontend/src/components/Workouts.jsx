import ResourcePage from './ResourcePage.jsx'

function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      eyebrow="Suggestions"
      resourceName="workouts"
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