import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import '../../styles/core.scss'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout ({ children }) {
  return (
    <div className='page-container container-fluid'>
      <div className='header fixed'>
        <Link to='/'><h3>Ops IO</h3></Link>
      </div>
      <div className='row'>
        <div className='col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-11 col-md-11 col-sm-11 col-xs-11 view-container'>
          {children}
        </div>
      </div>
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
