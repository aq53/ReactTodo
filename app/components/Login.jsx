import React from 'react';
import * as redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({
    onLogin(){
        var {dispatch}=this.props;

        dispatch(actions.startLogin());
    },
    render() {
        return (
            <div>
                <br/><br/>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-offset-4">
                        <div className="callout-auth">
                            <h3>Login</h3>
                            <p>
                                Login with Facebook account below.
                            </p>
                            <button onClick={this.onLogin} className="btn btn-danger ">Login with Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default redux.connect()(Login);