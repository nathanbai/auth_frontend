import axios from "axios";
import { Form } from "react-bootstrap";
import React, { Component } from 'react'
import { useState } from 'react' 

import Button from '@mui/material/Button';

import Cookies from "universal-cookie";
const cookies = new Cookies();

// https://nathan-nodejs-mongodb-auth-app.herokuapp.com/login

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // set configurations
        const configuration = {
            method: "post",
            url: "https://nathan-nodejs-mongodb-auth-app.herokuapp.com/login",
            data: {
                email: email,
                password: password,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setLogin(true);
                console.log(result);
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });

                window.location.href = "/About";
            })
            .catch((error) => {
                //error = new Error();
                console.log(error.response.data);
            });
    }

    return (
        <>
            <h2>Login</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}>
            {/* email */}
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email" />
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
            </Form.Group>

            {/* login button */}
            <Button
                    variant="primary"
                    type="submit"
                    onClick={(e)=>handleSubmit(e)}
                >
            Login
                </Button>

                
            {/* display success message */}
                {login ? (
                    <p className="text-success">You Are logged in Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not logged in!</p>
                )}
        </Form>
        </>
    )
}
