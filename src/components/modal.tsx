import React from 'react'
import { Link } from 'react-router-dom'

interface ModalUI {
  handleModalShown: (displayModal: boolean) => void;
}

export const Modal = (props: ModalUI) => {
  return (
    <div className="modal show"
      style={{
        display: 'block',
        background: 'rgba(0,0,0,.5)'
      }}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Premium content</h5>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => props.handleModalShown(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <p>This content is available only for premium users. If you already have an account, please <Link to="/sign-in">sing in</Link>.</p>

            <p className="mt-3">If you don't have an account, you can <Link to="sign-up">sing up</Link>.</p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => props.handleModalShown(false)}
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
