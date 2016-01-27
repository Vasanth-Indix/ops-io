import React, { PropTypes } from 'react'

export class DataTable extends React.Component {

  componentDidMount () {
    // TODO: find a better way to initialize
    window.jQuery(this.refs.dataContainer).DataTable()
  }

  static propTypes = {
    label: PropTypes.text,
    data: PropTypes.object
  };

  render () {
    const { label } = this.props
    return (
      <div>
        <hr/>
        <h2 className='text-left'>{ label }</h2>
        <hr/>
        <table className='table' ref='dataContainer'>
          <thead>
            <tr>
              <th>Service name</th>
              <th>CPU</th>
              <th>Memory</th>
              <th>Spot/OD</th>
              <th># instances</th>
              <th>Provisioned date</th>
              <th>Health</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Seeder</td>
              <td>1</td>
              <td>2G</td>
              <td>OD</td>
              <td>10</td>
              <td>Dec 10th 2015</td>
              <td>Ok</td>
            </tr>

          </tbody>

        </table>
      </div>
    )
  }
}
