"use strict";

//  Example 1
// Normal Function
// function getlocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return "No location"
//   }
// }

// Arrow Function
var getlocation = function getlocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  } else {
    return "No location";
  }
};

//  Exploring JSX and Arrov function
var user = {
  author_name: "John",
  book_name: "The journey",
  location: "Chennai",
  publish_year: "2000",
  cities: ["TN", "Kerala", "Andhra"],
  getCity: function getCity() {
    var _this = this;

    this.cities.forEach(function (cities) {
      console.log(_this.author_name + " lives in " + cities);
    });
  }
};
user.getCity();

// JSX Expression
var book_template = React.createElement(
  "div",
  null,
  user.author_name ? React.createElement(
    "h1",
    null,
    "Author Name: ",
    user.author_name,
    " "
  ) : "No name",
  React.createElement(
    "p",
    null,
    "Book Name :",
    user.book_name
  ),
  user.publish_year && user.publish_year >= 2000 && React.createElement(
    "p",
    null,
    "Publish Year: ",
    user.publish_year
  ),
  getlocation(user.location),
  "   "
);
// Example 1
var demo_values = {
  title: "Demo App",
  sub_title: "Select the options in the list",
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    demo_values.options.push(option);
    e.target.elements.option.value = '';
    RenderDemoApp();
  }
  console.log("form submitted", option);
};
var removeAll = function removeAll() {
  demo_values.options = [];
  RenderDemoApp();
};
var selectOption = function selectOption() {
  var rnum = Math.floor(Math.random() * demo_values.options.length);
  var option = demo_values.options[rnum];
  alert(option);
};

var appRoot = document.getElementById('app');

var RenderDemoApp = function RenderDemoApp() {
  var demo_app = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      demo_values.title
    ),
    demo_values.sub_title && React.createElement(
      "p",
      null,
      demo_values.sub_title
    ),
    React.createElement(
      "p",
      null,
      demo_values.options.length > 0 ? "Here are the options" : " No options"
    ),
    React.createElement(
      "button",
      { disabled: demo_values.options.length === 0, onClick: selectOption },
      "Should I do ?"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    React.createElement("br", null),
    demo_values.options.length,
    React.createElement(
      "ol",
      null,
      demo_values.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Options"
      )
    )
  );
  ReactDOM.render(demo_app, appRoot);
};
RenderDemoApp();
