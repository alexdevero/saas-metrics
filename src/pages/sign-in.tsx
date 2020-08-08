import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

export const SignIn = () => {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <>
      <Helmet>
        <title>Sign In | SaaS Metrics</title>
      </Helmet>

      <div className="page page-about">
        <div className="heading-wrapper">
          <h1 className="mt-4 mb-4">Sign in to your account</h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4">
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>

                <input
                  type="email"
                  className={`form-control ${showMessage ? 'input-error' : ''}`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>

                <input
                  type="password"
                  className={`form-control ${showMessage ? 'input-error' : ''}`}
                  id="exampleInputPassword1"
                />

                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-link p-0">
                    <small id="emailHelp" className="form-text font-italic">Forgot your password?</small>
                  </button>
                </div>
              </div>

              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />

                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
              </div>

              {showMessage && (
                <div className="text-danger font-weight-bold small mt-2 mb-3">Invalid email or password</div>
              )}

              <button onClick={() => setShowMessage(true)} type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
