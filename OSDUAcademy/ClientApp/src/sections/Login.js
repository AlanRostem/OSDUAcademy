import React from "react";
import {Component} from "react";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Container} from "reactstrap";
import UserInfoForm from "../components/login/UserInfoForm";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
    }
    
    inputUsername(event) {
        this.setState({email: event.target.value})
    }

    inputPassword(event) {
        this.setState({password: event.target.value})
    }
    
    handleLogin(event) {
        event.preventDefault();
        
        let data = JSON.stringify(this.state);
        console.log("Sending: ", data)
        fetch("login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: data,
        })
            .then(response =>
                response.text()
            )
            .then(data =>
                console.log(data)
            );
    }

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <UserInfoForm>
                        <h3>Sign in</h3>
                        <input type="email" name="email" placeholder="Email" onChange={this.inputUsername.bind(this)} required={true}/>
                        <input type="password" name="password" placeholder="Password" onChange={this.inputPassword.bind(this)} required={true}/>
                        <button type="submit" onClick={this.handleLogin.bind(this)}>Sign in</button>
                    </UserInfoForm>
                </Container>
            </div>
        );
    }
}