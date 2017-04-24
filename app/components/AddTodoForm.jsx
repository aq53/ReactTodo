var React = require('react');
var {connect}=require('react-redux');
var actions = require('actions');

 export var AddTodoForm = React.createClass({
    onButtonClick: function(e){
        e.preventDefault();
        var TodoText=this.refs.TodoText.value;
        var {dispatch}=this.props;
        if(TodoText.length > 0){
        this.refs.TodoText.value="";
        dispatch(actions.startAddTodo(TodoText));
        }else{
            this.refs.TodoText.focus();
        }
    },
    render: function() {
        return(
        <div className="container__footer">
            <form onSubmit={this.onButtonClick}>
                <input type="text" ref="TodoText" placeholder="What do you need to do?" className="form-control"/>
                <br/>
                <button className="btn btn-danger btn-block">Add Todo</button>
            </form>
        </div>
        );
    }
});

export default connect()(AddTodoForm);