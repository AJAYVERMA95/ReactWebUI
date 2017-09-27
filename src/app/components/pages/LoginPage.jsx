import React from 'react';

import LoginForm from '../forms/LoginForm.jsx';

class LoginPage extends React.Component {
    
    submit(data){
        console.log(data);
    }
    
    render(){
        return(
            <div>
                <h1>Login Page</h1> 
                <LoginForm submit={this.submit.bind(this)}/>
            </div>
        );
    }
}

module.exports = LoginPage;