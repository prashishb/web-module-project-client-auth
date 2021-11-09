import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FromInput,
  FormButton,
} from './FriendsElements';

const initialState = {
  name: '',
  age: '',
  email: '',
};

class AddFriend extends React.Component {
  state = { initialState };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', this.state)
      .then((res) => {
        this.setState(initialState);
        this.props.history.push('/friends');
      });
  };

  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <FormContent>
              <Form onSubmit={this.handleSubmit}>
                <FormH1>Add a Friend</FormH1>
                <FormLabel htmlFor='for'>Name:</FormLabel>
                <FromInput
                  type='text'
                  name='name'
                  placeholder='John Doe'
                  value={this.state.name}
                  required
                  onChange={this.handleChange}
                />
                <FormLabel htmlFor='for'>Age:</FormLabel>
                <FromInput
                  type='text'
                  name='age'
                  value={this.state.age}
                  required
                  onChange={this.handleChange}
                />
                <FormLabel htmlFor='for'>Email:</FormLabel>
                <FromInput
                  type='email'
                  name='email'
                  placeholder='john@example.com'
                  value={this.state.email}
                  required
                  onChange={this.handleChange}
                />
                <FormButton>Add Friend</FormButton>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}

export default AddFriend;
