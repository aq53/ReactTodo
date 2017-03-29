var React = require('react');
var Todo = require('Todo');
var TodoList= React.createClass({
    render: function(){
        var todos=this.props.todos;
        var renderTodos = () => {
            if(todos.length===0){
                return(
                    <p className="container__msg">Nothing to do</p>
                );
            }
            return todos.map((todo)=>{
                return (
                <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>   
        );
    }
});

module.exports = TodoList ;