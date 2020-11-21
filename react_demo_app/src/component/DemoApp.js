
import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOptions from './AddOptions';
import Options from './Options/Options';
import OptionModal from './Options/OptionModal';

class DemoApp extends React.Component {
  state = {
    title: "Demo App",
    sub_title: "Select the options",
    options: [],
    openModal: undefined
  }
  // constructor(props) {
  //   super(props);
  //   this.removeAll = this.removeAll.bind(this);
  //   this.optionsArray = this.optionsArray.bind(this);
  //   this.addOptions = this.addOptions.bind(this);
  //   this.removeEach = this.removeEach.bind(this);
  // }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json);
      if (options) {
        this.setState({
          options: options
        });
      }
    }
    catch (e) {}
  }
  closeModal =()  =>{
    this.setState({
      openModal: undefined
    });
  }
 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  removeEach = (optionValue) =>{
    this.setState({
      options: this.state.options.filter((option) => {
        return optionValue !== option
      })
    })
  }

  removeAll = () => {
    this.setState({
      options: []
    })
  }

  optionsArray=() => {
    const rnum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rnum]
    this.setState(() => ({
      openModal:option
    }))
    // alert(option)

  }

  addOptions=(option) => {
    if (!option) {
      return 'Enter a valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist'
    }
    this.setState({
      options: this.state.options.concat(option)
    })
      ;
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} sub_title={this.state.sub_title} />
        <Action hasOptions={this.state.options.length > 0} optionsArray={this.optionsArray}  />
        <Options options={this.state.options} removeAll={this.removeAll} removeEach={this.removeEach} />
        <AddOptions options={this.state.options} addOptions={this.addOptions} />
        <OptionModal openModal={this.state.openModal} closeModal = {this.closeModal}/>
      </div>
    )
  }

}
export default DemoApp