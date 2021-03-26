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
        success: null
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
        UserService.loginUser(this.state.email, this.state.password,
            data => this.setState({data: data, success: true}),
            () => this.setState({success: false})
        );
    }

    render() {
        let failed = false;
        let loggingIn = this.state.loggingIn;
        if (loggingIn) {
            if (!this.state.success) {
                failed = true;
                loggingIn = false;
            } else {
                if (this.props.match !== undefined)
                    if (this.props.match.params.courseRoute !== undefined)
                        return <Redirect push to={"/course-front-page/" + this.props.match.params.courseRoute}/>
                return <Redirect push to="/home-li"/>;
            }
        }

        let title = "Sign in to your account";
        if (this.props.match) {
            if (this.props.match.params)
                if (this.props.match.params.courseRoute)
                    title = "Sign in to continue";
        }
        
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <UserInfoForm onSubmit={this.handleLogin.bind(this)}>
                        <h3>
                            {title}
                        </h3>
                        {
                            failed ? <p style={{color: "red"}}>Invalid credentials</p> : null
                        }
                        <input type="email" name="email" placeholder="Email" onChange={this.inputUsername.bind(this)}
                               required={true}/>
                        <input type="password" name="password" placeholder="Password"
                               onChange={this.inputPassword.bind(this)} required={true}/>
                        {
                            !loggingIn ?
                                <button type="submit" onClick={this.handleLogin.bind(this)}>Sign in</button>
                                : <LoadingIcon/>
                        }
                    </UserInfoForm>
                </Container>
            </div>
        );
    }
}