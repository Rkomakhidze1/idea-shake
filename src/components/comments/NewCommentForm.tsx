import { useRef, useEffect, FormEvent } from 'react';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import { Comment } from '../../types';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

interface Props {
  onAddedComment: () => void;
  quoteId?: string;
}

const NewCommentForm = (props: Props) => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const { sendRequest, status, error } = useHttp<Comment>(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = commentTextRef.current?.value;
    if (!enteredText) return;

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
