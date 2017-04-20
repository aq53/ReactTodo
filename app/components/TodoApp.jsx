var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-offset-4" >
                        <br />
                        <div className="main-container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodoForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;