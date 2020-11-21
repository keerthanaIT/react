import React from 'react';
import Option from './Option';
class Options extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <button onClick={this.props.removeAll}>Remove All</button>
        {this.props.options.length === 0 && <p>please add options</p>}
        {
          this.props.options.map((options) =>
            <Option key={options} optionText={options} removeEach={this.props.removeEach} />
          )
        }
        {/* <p>{this.props.options.length}</p> */}
      </div>
    )
  }
}
export default Options