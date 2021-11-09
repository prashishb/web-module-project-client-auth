import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {
  Container,
  FriendsContainer,
  H2,
  WelcomeText,
  TableWrapper,
  Table,
} from './FriendsElements';

class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    axiosWithAuth()
      .get('/friends')
      .then((res) => {
        this.setState({ ...this.state, friends: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const username = localStorage.getItem('username');
    return (
      <Container>
        <WelcomeText>Welcome {username}</WelcomeText>
        <FriendsContainer>
          <H2>You have {this.state.friends.length} Friends</H2>
          <TableWrapper>
            <Table>
              {this.state.friends.map((friend, index) => (
                <tr>
                  <td>{index + 1}.</td>
                  <td>{friend.name}</td>
                </tr>
              ))}
            </Table>
          </TableWrapper>
        </FriendsContainer>
      </Container>
    );
  }
}

export default Friends;
