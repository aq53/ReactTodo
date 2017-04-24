var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var TodoApi= require('TodoApi');

var actions= require('actions');
var store = require('configStore').configure();

store.dispatch(actions.startAddTodos());

 ReactDOM.render(
     <Provider store={store}>
        <TodoApp/>
     </Provider>, 
     document.getElementById("app"));
