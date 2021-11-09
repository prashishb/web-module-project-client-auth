import React from 'react';
import axios from 'axios';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FromInput,
  FormButton,
} from './LoginElements';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then((res) => {
        localStorage.setItem('token', res.data.payload);
        localStorage.setItem('role', res.data.role);
        localStorage.setItem('username', res.data.username);
        this.props.loggedOn();
        this.props.history.push('/friends');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <FormContent>
              <Form onSubmit={this.login}>
                <FormH1>Log in to your account</FormH1>
                <FormLabel htmlFor='for'>Username:</FormLabel>
                <FromInput
                  type='text'
                  name='username'
                  value={this.state.credentials.username}
                  required
                  onChange={this.handleChange}
                />
                <FormLabel htmlFor='for'>Password:</FormLabel>
                <FromInput
                  type='password'
                  name='password'
                  value={this.state.credentials.password}
                  required
                  onChange={this.handleChange}
                />
                <FormButton type='submit'>Login</FormButton>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}

export default Login;
