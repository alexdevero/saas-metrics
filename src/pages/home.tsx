import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const Home = () => (
  <>
    <Helmet>
      <title>Home | SaaS Metrics</title>
    </Helmet>

    <div className="page page-home">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-8">
          <div className="heading-wrapper mb-4">
            <h1 className="h1 mt-0">SaaS Metrics <span aria-label="a rocket blasting off" role="img">🚀</span></h1>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-lg-10 text-center">
              <p>The most important metrics and KPIs every SaaS company should track on one place.</p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/metrics" className="btn btn-primary btn-round">See metrics</Link>
          </div>
        </div>
      </div>
    </div>
  </>
)
