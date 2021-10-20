import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import AuthForm from '../components/auth/AuthForm';
import useHttp from '../hooks/use-http';
import { signin } from '../lib/api';
import { login } from '../store/auth';

const Signin = () => {
  const { sendRequest, status, data, error } = useHttp(signin);
  const history = useHistory();
  const dispatch = useDispatch();

  const logUserIn = useCallback(
    (username: string) => {
      dispatch(login(username));
      history.push('/');
    },
    [dispatch, history]
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token) {
      logUserIn(username!);
    }

    if (status === 'completed' && !error && data.accessToken) {
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('username', data.username);
      logUserIn(data.username);
    }
  }, [status, history, dispatch, data, logUserIn, error]);

  const signinHandler = (payload: { username?: string; password?: string }) => {
    sendRequest(payload);
  };

  return (
    <AuthForm
      isLoading={status === 'pending'}
      onSigninRequest={signinHandler}
    />
  );
};

export default Signin;
