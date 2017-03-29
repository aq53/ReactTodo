var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var TodoApi = require('TodoApi');
var moment = require('moment');
var TodoApp=React.createClass({
    getInitialState: function(){
      return {
         showCompleted: false,
         searchText: '',
         todos: TodoApi.getTodos()
      };  
    },
    componentDidUpdate: function(){
        TodoApi.setTodos(this.state.todos);
    },
    handelAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text, 
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase(),
        })
    },
    handleToggle: function(id) {
        var updatedTodos=this.state.todos.map((todo) => {
            if(todo.id===id){
                todo.completed=!todo.completed;
            }
            if(todo.completed){
                todo.completedAt = moment().unix();
            }
            return todo;
                
        });
        this.setState({ todos: updatedTodos });
    },
    render: function(){
        var {todos,searchText,showCompleted}= this.state;
        var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
        return(
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-offset-4" >
                        <br/>
                        <div className="main-container">
                            <TodoSearch onSearch={this.handleSearch}/> 
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                            <AddTodoForm onAddTodo={this.handelAddTodo}/>
                        </div>
                    </div>
                </div>
             </div>
        );
    }
});

module.exports = TodoApp;