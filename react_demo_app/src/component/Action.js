import React from 'react';
class Action extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <button disabled={!this.props.hasOptions}  onClick={this.props.optionsArray}>Should I do ?</button>
    )
  }
}
export default Action