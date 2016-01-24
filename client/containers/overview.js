'use strict'

import React from 'react'
import {connect} from 'react-redux'

export const Overview = React.createClass({
  render () {
    return (
      <div className="page container-fluid">
        <div className="row middle-xs">
          <h2 className="col-xs-12 col-sm-6">Overview</h2>

          <div className="col-xs-12 col-sm-6 txt-right">
            <select>
              <option>120 seconds</option>
              <option>5 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
})

export default connect((state) => {
  return {
  }
})(Overview)
