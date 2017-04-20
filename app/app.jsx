var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var TodoApi= require('TodoApi');

var actions= require('actions');
var store = require('configStore').configure();

store.subscribe(() => {
    var state = store.getState();
    console.log('New state',state);

    TodoApi.setTodos(state.todos);
});
var initialTodos=TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

 ReactDOM.render(
     <Provider store={store}>
        <TodoApp/>
     </Provider>, 
     document.getElementById("app"));
