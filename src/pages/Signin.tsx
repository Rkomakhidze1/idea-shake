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

  const logUserIn = useCallback(() => {
    dispatch(login());
    history.push('/');
  }, [dispatch, history]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      logUserIn();
    }

    if (status === 'completed' && !error && data.access_token) {
      localStorage.setItem('token', data.access_token);
      logUserIn();
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
