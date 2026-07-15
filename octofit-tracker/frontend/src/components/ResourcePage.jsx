import { useEffect, useState } from 'react'

import { fetchCollection } from '../api.js'

function renderValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (value && typeof value === 'object') {
    return Object.entries(value)
      .map(([key, nestedValue]) => `${key}: ${nestedValue}`)
      .join(', ')
  }

  return value ?? '—'
}

function ResourcePage({ title, eyebrow, resourceName, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadItems() {
      try {
        const result = await fetchCollection(resourceName)

        if (isMounted) {
          setItems(result.items)
          setStatus('ready')
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message)
          setStatus('error')
        }
      }
    }

    loadItems()

    return () => {
      isMounted = false
    }
  }, [resourceName])

  return (
    <section className="resource-page" aria-labelledby={`${resourceName}-title`}>
      <div className="resource-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id={`${resourceName}-title`}>{title}</h1>
        <span className="record-count">{items.length} records</span>
      </div>

      {status === 'loading' && <p className="state-message">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="state-message error">Unable to load data: {error}</p>}

      {status === 'ready' && (
        <div className="table-responsive data-surface">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id ?? item.id ?? JSON.stringify(item)}>
                  {columns.map((column) => (
                    <td key={column.key}>{renderValue(column.render ? column.render(item) : item[column.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourcePage