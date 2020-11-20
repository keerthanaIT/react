"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoApp = function (_React$Component) {
  _inherits(DemoApp, _React$Component);

  function DemoApp(props) {
    _classCallCheck(this, DemoApp);

    var _this = _possibleConstructorReturn(this, (DemoApp.__proto__ || Object.getPrototypeOf(DemoApp)).call(this, props));

    _this.removeAll = _this.removeAll.bind(_this);
    _this.optionsArray = _this.optionsArray.bind(_this);
    _this.addOptions = _this.addOptions.bind(_this);
    _this.state = {
      title: "Demo App",
      sub_title: "Select the options",
      options: []
    };
    return _this;
  }

  _createClass(DemoApp, [{
    key: "removeAll",
    value: function removeAll() {
      this.setState({
        options: []
      });
    }
  }, {
    key: "optionsArray",
    value: function optionsArray() {
      var rnum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[rnum];
      alert(option);
    }
  }, {
    key: "addOptions",
    value: function addOptions(option) {
      console.log("op--", option);
      if (!option) {
        return 'Enter a valid value';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exist';
      }
      this.setState({
        options: this.state.options.concat(option)
      });
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: this.state.title, sub_title: this.state.sub_title }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, optionsArray: this.optionsArray }),
        React.createElement(Options, { options: this.state.options, removeAll: this.removeAll }),
        React.createElement(AddOptions, { options: this.state.options, addOptions: this.addOptions })
      );
    }
  }]);

  return DemoApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.sub_title
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { disabled: !this.props.hasOptions, onClick: this.props.optionsArray },
        "Should I do ?"
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      console.log("props oprions", this.props.options);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.removeAll },
          "Remove All"
        ),
        this.props.options.map(function (options) {
          return React.createElement(Option, { key: options, optionText: options });
        }),
        React.createElement(
          "p",
          null,
          this.props.options.length
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option(props) {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ol",
          null,
          React.createElement(
            "li",
            null,
            this.props.optionText,
            "  ",
            React.createElement(
              "button",
              { onClick: this.removeEach },
              "Remove"
            )
          )
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
  _inherits(AddOptions, _React$Component6);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this6 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this6.onFormSubmit = _this6.onFormSubmit.bind(_this6);
    _this6.state = {
      error: ''
    };
    return _this6;
  }

  _createClass(AddOptions, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value;
      var error = this.props.addOptions(option);
      this.setState(function () {
        return { error: error };
      });
      //  if(option){
      //    this.props.addOptions(option);
      //  }
    }
  }, {
    key: "render",
    value: function render() {
      console.log("pppp", this.props.options);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.onFormSubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Options"
          ),
          this.state.error && React.createElement(
            "p",
            null,
            " ",
            this.state.error,
            " "
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(DemoApp, null), document.getElementById('app'));
