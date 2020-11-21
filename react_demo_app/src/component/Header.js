
import React from 'react';
// import ReactDOM from 'react-dom';


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
export default Header