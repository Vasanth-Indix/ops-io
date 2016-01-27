import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../../redux/modules/counter'
import classes from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomeView extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  render () {
    var colClass = classes.col + " col-xs-1 col-sm-1 col-md-1 col-lg-1"
    return (
      <div className='container-fluid text-center'>
        <div className='row'>
          <div className={colClass}>
            <Link to='/'><h3 className={classes.title}>Ops IO</h3></Link>
          </div>
        </div>
        <div className='row'>
          <div className={colClass}>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
