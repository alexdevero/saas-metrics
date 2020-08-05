import React, { useState } from 'react'
import axios from 'axios'

export const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccesMessage] = useState('')

  const submitForm = () => {
    if (email.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setErrorMessage('')

      const formData = new FormData()
      formData.append('email', email)

      axios
        .post('url to php file', formData)
        .then(res => {
          console.log('foo');

          setEmail('')
          setSuccesMessage(res.data)
        })
        .catch(err => {
          setErrorMessage(err)

          console.log('err', err);
        })
    } else {
      setErrorMessage('Please use correct email address.')
    }
  }

  return (
    <div className="page page-deals">
      <div className="heading-wrapper">
        <h1 className="mt-4 mb-4">Subscribe</h1>
      </div>

      <div className="row justify-content-center flex-column align-items-center">
        <div className="col-md-8 col-lg-7 text-center">
          <p className="mb-4">Stay updated about new metrics and also new SaaS projects you might be interested in.</p>
        </div>

        <div className="col-sm-8 col-md-6 col-lg-4 text-center">
          <div className="form-group form-inline">
            <input
              type="text"
              placeholder="Enter your email..."
              className="form-control rounded-left flex-sm-grow-1"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />

            <button onClick={submitForm} className="btn btn-primary flex-grow-1 flex-sm-grow-0 mt-2 mt-sm-0">Sign up</button>
          </div>

          {successMessage.length > 0 && (
            <div className="text-danger font-weight-bold small">{errorMessage}</div>
          )}

          {errorMessage.length > 0 && (
            <div className="text-danger font-weight-bold small">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  )
}
