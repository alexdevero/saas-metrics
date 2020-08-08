import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

export const SignUp = () => {
  const [showMessage, setSowMessage] = useState(false)

  return (
    <>
      <Helmet>
        <title>Sign up | SaaS Metrics</title>
      </Helmet>

      <div className="page page-about">
        <div className="heading-wrapper">
          <h1 className="mt-4 mb-4">Create an account</h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4">
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>

                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              {showMessage && (
                <div className="font-weight-bold small mt-2 mb-3">Sorry, registrations are closed for now. To get notified when registrations are open send me an <a href="mailto:deveroalex@gmail.com">email</a>.</div>
              )}

              <button onClick={() => setSowMessage(true)} type="submit" className="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
