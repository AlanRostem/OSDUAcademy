import React from "react";
import {Component} from "react";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Container} from "reactstrap";
import UserInfoForm from "../components/login/UserInfoForm";
import LoadingIcon from "../components/misc/LoadingIcon";
import {Redirect} from "react-router-dom";
import UserService from "../services/UserService";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        loggingIn: false,
    }

    inputUsername(event) {
        this.setState({email: event.target.value})
    }

    inputPassword(event) {
        this.setState({password: event.target.value})
    }

    handleLogin(event) {
        event.preventDefault();
        this.setState({loggingIn: true});
        let data = JSON.stringify({
            email: this.state.email,
            password: this.state.password,
        });

        fetch("login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: data,
        })
            .then(response =>
                response.json()
            )
            .then(data =>
                this.setState({data: data})
            );
    }

    render() {
        if (this.state.loggingIn) {
            this.state.loggingIn = false;
        }

        let loggedIn = false;
        let failed = false;
        if (this.state.data) {
            if (!this.state.data.success) {
                failed = true;
            } else {
                loggedIn = true;
                UserService.setUser(this.state.data.user);
            }
        }

        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <UserInfoForm onSubmit={this.handleLogin.bind(this)}>
                        <h3>Sign in</h3>
                        {
                            loggedIn ? <Redirect to="home-li" /> : null
                        }
                        {
                            failed ? <p style={{color: "red"}}>Invalid credentials</p> : null
                        }
                        <input type="email" name="email" placeholder="Email" onChange={this.inputUsername.bind(this)}
                               required={true}/>
                        <input type="password" name="password" placeholder="Password"
                               onChange={this.inputPassword.bind(this)} required={true}/>
                        {
                            !this.state.loggingIn ?
                                <button type="submit" onClick={this.handleLogin.bind(this)}>Sign in</button>
                                : <LoadingIcon/>
                        }
                    </UserInfoForm>
                </Container>
            </div>
        );
    }
}