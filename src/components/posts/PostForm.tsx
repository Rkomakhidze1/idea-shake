import { Fragment, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Prompt } from 'react-router-dom';
import { RootState } from '../../store/store';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './PostForm.module.css';

interface Props {
  onAddPost?: (payload: { author?: string; text?: string }) => void;
  isLoading?: boolean;
}

const PostForm = (props: Props) => {
  const { username } = useSelector((state: RootState) => state.auth);
  const [isEntering, setIsEntering] = useState(false);

  const textInputRef = useRef<HTMLTextAreaElement>(null);

  function submitFormHandler(event: any) {
    event.preventDefault();

    const enteredText = textInputRef?.current?.value;

    props.onAddPost &&
      props.onAddPost({ author: username!, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" disabled id="author" value={username!} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows={5} ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Post
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default PostForm;
