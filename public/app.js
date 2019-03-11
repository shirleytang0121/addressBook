"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressBook = function (_React$Component) {
    _inherits(AddressBook, _React$Component);

    function AddressBook(props) {
        _classCallCheck(this, AddressBook);

        var _this = _possibleConstructorReturn(this, (AddressBook.__proto__ || Object.getPrototypeOf(AddressBook)).call(this, props));

        _this.handleAddItem = _this.handleAddItem.bind(_this);
        _this.handleDeleteItem = _this.handleDeleteItem.bind(_this);
        _this.state = {
            firstName: ["niki", "tt"]
        };
        return _this;
    }

    _createClass(AddressBook, [{
        key: "handleAddItem",
        value: function handleAddItem(firstName) {
            this.setState(function (prevState) {
                return {
                    firstName: prevState.firstName.concat(firstName)
                };
            });
        }
    }, {
        key: "handleDeleteItem",
        value: function handleDeleteItem() {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(ShowItem, { firstName: this.state.firstName }),
                React.createElement(AddItem, { handleAddItem: this.handleAddItem })
            );
        }
    }]);

    return AddressBook;
}(React.Component);

var ShowItem = function (_React$Component2) {
    _inherits(ShowItem, _React$Component2);

    function ShowItem() {
        _classCallCheck(this, ShowItem);

        return _possibleConstructorReturn(this, (ShowItem.__proto__ || Object.getPrototypeOf(ShowItem)).apply(this, arguments));
    }

    _createClass(ShowItem, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.firstName.map(function (firstName) {
                    return React.createElement(
                        "p",
                        { key: firstName },
                        "Name:",
                        firstName
                    );
                })
            );
        }
    }]);

    return ShowItem;
}(React.Component);

var AddItem = function (_React$Component3) {
    _inherits(AddItem, _React$Component3);

    function AddItem(props) {
        _classCallCheck(this, AddItem);

        var _this3 = _possibleConstructorReturn(this, (AddItem.__proto__ || Object.getPrototypeOf(AddItem)).call(this, props));

        _this3.handleAddItem = _this3.handleAddItem.bind(_this3);
        return _this3;
    }

    _createClass(AddItem, [{
        key: "handleAddItem",
        value: function handleAddItem(e) {
            e.preventDefault();

            var firstName = e.target.elements.firstName.value.trim();
            if (firstName) {
                this.props.handleAddItem(firstName);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddItem },
                    React.createElement("input", { type: "text", name: "firstName" }),
                    React.createElement(
                        "button",
                        null,
                        "Submit"
                    )
                )
            );
        }
    }]);

    return AddItem;
}(React.Component);

ReactDOM.render(React.createElement(AddressBook, null), document.getElementById("app"));
