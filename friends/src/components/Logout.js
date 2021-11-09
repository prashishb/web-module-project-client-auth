import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';

const Logout = (props) => {
  const { push } = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .post('/logout')
      .then((res) => {
        localStorage.removeItem('token');
        props.loggedOut();
        push('/login');
      });
  }, []);
  return <div></div>;
};

export default Logout;
