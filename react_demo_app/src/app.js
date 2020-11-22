import React from 'react';
import ReactDOM from 'react-dom';
import DemoApp from './component/DemoApp';
import AppRouter from './routes/AppRoute';
// import '../src/asserts/style.scss';




// ReactDOM.render(<DemoApp />, document.getElementById('app'))
ReactDOM.render(<AppRouter />, document.getElementById('app'))