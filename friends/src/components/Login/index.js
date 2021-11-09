import React from 'react';
import axios from 'axios';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FromInput,
  FormButton,
  Text,
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
        console.log(res);
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
            <Icon to='/'>friendsApp</Icon>
            <FormContent>
              <Form onSubmit={this.login}>
                <FormH1>Log in to your account</FormH1>
                <FormLabel htmlFor='for'>Username:</FormLabel>
                <FromInput
                  type='email'
                  placeholder='john@example.com'
                  required
                  onChange={this.handleChange}
                />
                <FormLabel htmlFor='for'>Password:</FormLabel>
                <FromInput
                  type='password'
                  required
                  onChange={this.handleChange}
                />
                <FormButton type='submit'>Login</FormButton>
                <Text>Forgot password</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}

export default Login;
