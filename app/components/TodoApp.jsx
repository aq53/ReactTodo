var React = require('react');
import * as redux from 'react-redux';
import * as actions from 'actions';

import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
    onLogout(e){
        var {dispatch}=this.props;
        e.preventDefault();
        
        dispatch(actions.startLogout());
    },
    render() {
        return (
            <div>
                <div className="page-actions">
                    <a onClick ={this.onLogout} href="#">Logout</a>
                </div>
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

export default redux.connect()(TodoApp);