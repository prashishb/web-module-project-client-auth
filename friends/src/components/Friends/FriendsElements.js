import styled from 'styled-components';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #262936;
`;

export const FriendsContainer = styled.div`
  width: 600px;
  background: #292c3a;
  color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  min-height: 420px;
  margin: calc(80px + 10px) auto;

  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const WelcomeText = styled.h1`
  margin-top: calc(90px + 10px);
  text-align: center;
  color: white;
`;

export const H2 = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

export const FriendList = styled.ul`
  padding: 0;
  margin: 0 15px 30px;
  list-style: none;
  border-top: 1px solid #ddd;
`;

export const TableWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

export const Table = styled.table`
  font-size: 18px;
  width: 100%;
  border-spacing: 0;

  tr {
    background-color: #262936;
    padding: 20px;
    vertical-align: middle;
    height: 33px;

    &:nth-child(even) {
      background-color: #2f3247;
    }
  }

  td {
    padding: 4%4%;
    align-content: center;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

//AddFriend Component

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #292c3a;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 0.875rem;
  color: #fff;
`;

export const FromInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  background-color: #262936;
  color: #fff;

  &:focus {
    outline: none;
  }
`;

export const FormButton = styled.button`
  background: #8764b8;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
`;
