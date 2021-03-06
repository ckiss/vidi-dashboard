'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import {pushPath} from 'redux-simple-router'

export const Login = React.createClass({
  componentDidMount() {
    const {isLoggedIn, dispatch} = this.props

    if (isLoggedIn) {
      dispatch(pushPath('/'))
    }
  },

  handleSubmit (event) {
    event.preventDefault()

    const {email, pass} = this.refs
    const {dispatch} = this.props

    dispatch(login(email.value, pass.value))
  },

  render () {
    const {hasError, niceError} = this.props
    let heading = hasError ? niceError : 'Login'

    return (
      <main className="page page-login" role="main">
        <div className="container-fluid">
          <div className="row middle-xs center-xs vertical-center">
            <form className="login-form col-xs-12 col-md-6 col-lg-4 txt-left form-full-width form-panel" onSubmit={this.handleSubmit}>

              <h2 className="mt0 has-icon">
                <span className='icon icon-signin'></span>
                <span>{heading}</span>
              </h2>

              <input ref="email" type="email" placeholder="Email" className="input-large" required />
              <input ref="pass" type="password" placeholder="Password" className="input-large" required />
              <button type="submit" className="btn btn-large submit">Submit</button>
            </form>
          </div>
        </div>
      </main>
    )
  }
})

export default connect((state) => {
  const {hasError, niceError, isLoggedIn} = state.auth

  return {
    hasError: hasError,
    niceError: niceError,
    isLoggedIn: isLoggedIn
  }
})(Login)
