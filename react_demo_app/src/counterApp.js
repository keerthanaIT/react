// Counter App
let count = 0;
const addOne = () => {
  count++;
  RenderApp();
};
const subOne = () => {
  count--;
  RenderApp();
};
const reset = () => {
  count = 0;
  RenderApp();
};

const appRoot = document.getElementById('app');
const RenderApp = () =>{
  const counter = (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick = {(addOne)}>+1</button>
      <button onClick = {(subOne)}>-1</button>
      <button onClick = {(reset)}>reset</button>
    </div>
    );

ReactDOM.render(counter, appRoot)

}
RenderApp();