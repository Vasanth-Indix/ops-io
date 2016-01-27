import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as counterActions } from '../../redux/modules/counter'
import { DataTable } from '../../components/DataTable/DataTable'
import { NavigationPane } from '../../components/NavigationPane/NavigationPane'
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
    return (
      <div>
        <div className={'fixed ' + classes.navbar}>
            <NavigationPane/>
        </div>
        <div className={ classes.tablescontainer }>
          {
            Array(10).fill(1).map((v, k) => {
              return <DataTable label={'SCP-' + k} data=''/>
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
