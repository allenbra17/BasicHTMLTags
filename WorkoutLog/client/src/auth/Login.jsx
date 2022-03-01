import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            body: JSON.stringify({user:{username: username, passwordHash: passwordHash}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPasswordHash(e.target.value)} name='password' value={passwordHash}/>
                </FormGroup>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    );
}
 
export default Login;