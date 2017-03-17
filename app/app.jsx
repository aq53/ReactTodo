var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: "AQ",
    location: "karachi"
};
var objtwo = {
    age: 23,
    ...objOne
};

console.log(objtwo);

 ReactDOM.render(<h1>Boilerplate App! </h1>, document.getElementById("app"));
