import { useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './AuthForm.module.css';

interface Props {
  onSigninRequest?: (payload: { username?: string; password?: string }) => void;
  isLoading?: boolean;
}

const AuthForm = (props: Props) => {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function submitFormHandler(event: any) {
    event.preventDefault();

    const enteredUsername = usernameInputRef?.current?.value;
    const enteredPassword = passwordInputRef?.current?.value;

    props.onSigninRequest &&
      props.onSigninRequest({
        username: enteredUsername,
        password: enteredPassword,
      });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input id="password" ref={passwordInputRef}></input>
        </div>
        <div className={classes.actions}>
          <button className="btn">Log in</button>
        </div>
      </form>
    </Card>
  );
};

export default AuthForm;
