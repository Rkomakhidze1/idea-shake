import { useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './AuthForm.module.css';

interface Props {
  onAddAuth?: (arg: { author?: string; text?: string }) => void;
  isLoading?: boolean;
}

const AuthForm = (props: Props) => {
  const authorInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function submitFormHandler(event: any) {
    event.preventDefault();

    const enteredAuthor = authorInputRef?.current?.value;
    const enteredText = passwordInputRef?.current?.value;

    props.onAddAuth &&
      props.onAddAuth({ author: enteredAuthor, text: enteredText });
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
          <input type="text" id="username" ref={authorInputRef} />
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
