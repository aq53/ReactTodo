var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');

var TodoApp=React.createClass({
    getInitialState: function(){
      return {
         showCompleted: false,
         searchText: '',
         todos: [
              {
                  id: 1,
                  text: 'Walk the dog'
              },{
                  id: 2,
                  text: 'Clean the yard'
              },{
                  id: 3,
                  text: 'Learn react'
              },{
                  id: 4,
                  text: 'Ponka'
              }
              ],
      };  
    },
    handelAddTodo: function (text) {
        alert("New Todo: "+ text);
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function(){
        var {todos}= this.state;
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/> 
                <TodoList todos={todos}/>
                <AddTodoForm onAddTodo={this.handelAddTodo}/>
            </div> 
        );
    }
});

module.exports = TodoApp;