class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.subOne = this.subOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
    }
  }
  componentDidMount(){
    const json  = localStorage.getItem('count');
    const count = parseInt(json , 10)
    if(!isNaN(count)){
      this.setState({
        count : count
      });
    }
      
  }
  componentDidUpdate(prevState){
    if(prevState.count !== this.state.count){
      const json  = JSON.stringify(this.state.count);
      localStorage.setItem('count',json)
    }

  }
  addOne() {
    this.setState({
      count: this.state.count + 1
    }
    )
    // count++;
  };
  subOne() {
    this.setState({
        count: this.state.count - 1 
      
    })
  };
  reset() {
    this.setState(() =>{
      return{
        count : 0
      }
    })
  };
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.subOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'))

// Counter App
// let count = 0;
// const addOne = () => {
//   count++;
//   RenderApp();
// };
// const subOne = () => {
//   count--;
//   RenderApp();
// };
// const reset = () => {
//   count = 0;
//   RenderApp();
// };

// const appRoot = document.getElementById('app');
// const RenderApp = () =>{
//   const counter = (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick = {(addOne)}>+1</button>
//       <button onClick = {(subOne)}>-1</button>
//       <button onClick = {(reset)}>reset</button>
//     </div>
//     );

// ReactDOM.render(counter, appRoot)

// }
// RenderApp();