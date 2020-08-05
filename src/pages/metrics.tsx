import React, { useEffect, useState } from 'react'

import './../styles/metrics.css'

import { metrics } from './../data/metrics'

interface metricsUI {
  id: string;
  name: string;
  description: string;
  importance: string;
}

export const Metrics = () => {
  const [metricsState, setMetricsState] = useState<metricsUI[]>([])
  const [shouldRefresh, setShouldRefresh] = useState(false)
  const [sorted, setSorted] = useState('none')
  const [filterQuery, setFilterQuery] = useState('')

  useEffect(() => {
    setMetricsState(metrics)
    setShouldRefresh(false)
  }, [shouldRefresh])

  const sortMetrics = (order: 'name: desc' | 'name: asc') => {
    if (order === 'name: asc') {
      setMetricsState(metricsState.sort((a, b) => {
        return a.name > b.name ? 1 : -1
      }))

      setShouldRefresh(true)

      setSorted('asc')

      setFilterQuery('')
    } else if (order === 'name: desc') {
      setMetricsState(metricsState.sort((a, b) => {
        return a.name < b.name ? 1 : -1
      }))

      setShouldRefresh(true)

      setSorted('desc')

      setFilterQuery('')
    }
  }

  const filterMetrics = (val: string) => {
    let newState = metrics.filter(metric => metric.name.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1)

    setFilterQuery(val)

    setMetricsState(newState)

    setSorted('none')
  }

  return (
    <div className="page page-metrics">
      <div className="heading-wrapper">
        <h1 className="mt-4 mb-4">Metrics</h1>
      </div>

      <div className="row mb-4 justify-content-center">
        <div className="col-lg-10">
          <div className="row justify-content-between">
            <div className="col-sm-7">
              <div className="form-group my-0">
                <input
                  onChange={(event) => filterMetrics(event.currentTarget.value)}
                  type="text"
                  placeholder="Filter metrics..."
                  value={filterQuery}
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-sm-5 col-md-4 col-lg-4 mt-2 mt-sm-0">
              <div className="metrics-sort-wrapper btn-group">
                <button className={`btn${sorted === 'asc' ? ' btn-primary' : ' btn-light border-top border-left border-bottom'}`} onClick={() => sortMetrics('name: asc')}>Sort asc.</button>
                <button className={`btn${sorted === 'desc' ? ' btn-primary' : ' btn-light border-top border-right border-bottom'}`} onClick={() => sortMetrics('name: desc')}>Sort desc.</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
        {metricsState.map(metricItem => (
          <div className="metrics-item" key={metricItem.id}>
            <h2 className="h5 mb-3 mt-0">{metricItem.name}</h2>

            <div className="divider mb-3"></div>

            <h3 className="h6 mt-0">{metricItem.importance}</h3>

            <p className="mb-0">{metricItem.description}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
