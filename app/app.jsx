var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');

var actions= require('actions');
var store = require('configStore').configure();

store.subscribe(() => {
    console.log('New state',store.getState());
});

store.dispatch(actions.addTodo('clean'));
store.dispatch(actions.toggleShowCompleted());
store.dispatch(actions.setSearchText('cl'));

 ReactDOM.render(
     <Provider store={store}>
        <TodoApp/>
     </Provider>, 
     document.getElementById("app"));
