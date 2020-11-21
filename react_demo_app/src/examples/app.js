class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.optionsArray = this.optionsArray.bind(this);
    this.addOptions = this.addOptions.bind(this);
    this.removeEach = this.removeEach.bind(this);
    
    this.state = {
      title : "Demo App",
      sub_title : "Select the options",
      options :[]
    }
  }
componentDidMount(){
  try{
    const json =  localStorage.getItem('options')
    const options = JSON.parse(json);
    if(options){
      this.setState({
        options: options
      });
    }
    console.log("Component Did Mount" ,options)
  
  }
  catch(e){
      
  }
}
componentDidUpdate(prevProps,prevState){
  if(prevState.options.length !== this.state.options.length){
    const json = JSON.stringify(this.state.options)
    localStorage.setItem('options',json)
  }
  console.log("Component Did update")
}
  removeEach(optionValue){
    this.setState({
      options:this.state.options.filter((option)=>{
return optionValue !== option
      })
    })
   }
  removeAll(){
    this.setState({
      options:[]
    })
   }
  optionsArray(){
    const rnum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rnum]
    alert(option)
    
  }
  addOptions(option){
console.log("op--",option)
if(!option){
  return 'Enter a valid value'
}else if(this.state.options.indexOf(option) > -1){
  return 'This option already exist'
}
this.setState({
  options:this.state.options.concat(option)
})
;
  }
  render() {

    return (
      <div>
        <Header title={this.state.title} sub_title={this.state.sub_title} />
        <Action hasOptions={this.state.options.length > 0} optionsArray={this.optionsArray}/>
        <Options options={this.state.options} removeAll={this.removeAll} removeEach = {this.removeEach}/>
        <AddOptions options={this.state.options} addOptions={this.addOptions}/>
      </div>
    )
  }

}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.sub_title}</h2>
      </div>
    );
  }
}
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
class Options extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    console.log("props oprions", this.props.options)
    return (
      <div>
        <button onClick={this.props.removeAll}>Remove All</button>
        {this.props.options.length === 0 && <p>please add options</p>}
        {
          this.props.options.map((options) =>
            <Option key={options} optionText={options} removeEach={this.props.removeEach} />
          )
        }
        <p>{this.props.options.length}</p>
      </div>
    )
  }
}
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
    console.log("pppp",this.props.options)
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
ReactDOM.render(<DemoApp />, document.getElementById('app'))