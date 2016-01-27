import React from 'react'
import classes from './style.scss'

export class NavigationPane extends React.Component {
  render () {
    return (
      <nav className={ classes.navigationbar }>
        <ul className='list-unstyled text-center'>
          <li>
            <a href='/dashboard'>
              <span><i className='glyphicon glyphicon-stats'/></span><br/>
              <h6>Dashboard</h6>
            </a>
          </li>
          <li>
            <a href='/new'>
              <span><i className='glyphicon glyphicon-plus-sign'/></span><br/>
              <h6>New app</h6>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
