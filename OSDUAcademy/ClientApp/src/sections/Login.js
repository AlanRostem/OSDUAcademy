import React from "react";
import { Component } from "react";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Container} from "reactstrap";
import UserInfoForm from "../components/login/UserInfoForm";

export default class Login extends Component {
    render() {
        return (
            <div>
                <DefaultNavMenu />
                <Container>
                    <UserInfoForm>
                        <h3>Sign in</h3>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="password"  name="password" placeholder="Password"/>
                        <button>Sign in</button>
                    </UserInfoForm>
                </Container>
            </div>
        );
    }
}