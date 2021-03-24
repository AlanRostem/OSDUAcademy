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
        UserService.loginUser(this.state.email, this.state.password, data =>
            this.setState({data: data})
        );
    }

    render() {
        if (this.state.loggingIn) {
            this.state.loggingIn = false;
        }

        let failed = false;
        if (this.state.data) {
            if (!this.state.data.success) {
                failed = true;
            } else {
                if (this.props.match !== undefined) 
                    if (this.props.match.params.courseRoute !== undefined)
                        return <Redirect to={"/course-front-page/" + this.props.match.params.courseRoute} />
                return <Redirect to="/home-li" />;
            }
        }

        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <UserInfoForm onSubmit={this.handleLogin.bind(this)}>
                        <h3>
                            {
                                this.props.match.params === undefined ? 
                                    "Sign in to your account" : "Sign in to continue"
                            }
                        </h3>
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