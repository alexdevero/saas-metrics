import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => (
  <div className="page page-home">
    <div className="heading-wrapper mb-4">
      <h1 className="h1 mt-0">SaaS Metrics <span aria-label="a rocket blasting off" role="img">🚀</span></h1>
    </div>

    <div className="row justify-content-center mb-4">
      <div className="col-lg-10 text-center">
        <p>The most important metrics and KPIs every SaaS company should track on one place.</p>
      </div>
    </div>

    <Link to="/metrics" className="btn btn-primary btn-round">See metrics</Link>
  </div>
)
