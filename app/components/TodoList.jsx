var React = require('react');
var {connect} = require('react-redux');

import Todo from 'Todo';
export var TodoList= React.createClass({
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
                <Todo key={todo.id} {...todo}/>
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
export default connect(
    (state) => {
        return {
            todos: state.todos 
        }
    }
)(TodoList);

// module.exports = connect(
//     (state) => {
//         return {
//             todos: state.todos 
//         }
//     }
// )(TodoList);