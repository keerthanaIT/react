import React from 'react';
class Option extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.optionText}
          <button onClick={(e) =>{
            this.props.removeEach(this.props.optionText)
          }}>Remove</button>
      </div>
    )
  }
}
export default Option