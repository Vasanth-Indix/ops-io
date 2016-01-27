import React from 'react'
import classes from './style.scss'
import { connect } from 'react-redux'
import { NavigationPane } from '../../components/NavigationPane/NavigationPane'

const mapStateToProps = (state) => ({
})

export class AddNewView extends React.Component {
  render () {
    return (
      <div>
        <div className={ 'fixed ' + classes.navbar }>
            <NavigationPane/>
        </div>
        <div className={ classes.formcontainer }>
          <div className='header-group'>
            <h1>New app</h1>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
              <form>
                <fieldset className='form-group'>
                  <label htmlFor='name'>Name</label><br/>
                  <input name='name' type='text'/>
                </fieldset>
                <fieldset className='form-group'>
                  <label htmlFor='env'>Environment</label><br/>
                  <input name='env' type='text'/>
                </fieldset>
                <fieldset className='form-group'>
                  <label htmlFor='team'>Team</label><br/>
                  <input name='team' type='text'/>
                </fieldset>
                <fieldset className='form-group'>
                  <label htmlFor='tags'>Tags</label><br/>
                  <input name='tags' type='text'/>
                </fieldset>
                <fieldset className='form-group'>
                  <label htmlFor='desc'>Description</label><br/>
                  <input name='desc' type='text'/>
                </fieldset>
                <fieldset className='form-group'>
                  <label htmlFor='owner'>Owner</label><br/>
                  <input name='owner' type='text'/>
                </fieldset>

              </form>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                  <div className='row'>
                    {
                      Array(4).fill(1).map((v, k) => {
                        return (
                          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <h3> General </h3>
                            <ul className='list-unstyle'>
                              <li>Name : Hawkeye-service</li>
                              <li>Env : Production</li>
                              <li>Team : Force</li>
                              <li>Tags : Play-service</li>
                              <li>Description : Realtime metrics</li>
                            </ul>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                  <div className='row'>
                    {
                      Array(4).fill(1).map((v, k) => {
                        return (
                          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <h3> General </h3>
                            <ul className='list-unstyle'>
                              <li>Name : Hawkeye-service</li>
                              <li>Env : Production</li>
                              <li>Team : Force</li>
                              <li>Tags : Play-service</li>
                              <li>Description : Realtime metrics</li>
                            </ul>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AddNewView)
