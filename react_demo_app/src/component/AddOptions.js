import React from 'react';
class AddOptions extends React.Component {
  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
    error :''
    }
  }
  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
     const error = this.props.addOptions(option)
     this.setState(() => {
      return {error}
     })
     if(!error){
       e.target.elements.option.value = '';
     }
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Options</button>
          {this.state.error && <p> {this.state.error} </p>}
        </form>
      </div>
    )
  }
}
export default AddOptions