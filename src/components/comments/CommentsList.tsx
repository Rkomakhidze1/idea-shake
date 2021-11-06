import { Comment } from '../../types';
import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

interface Props {
  comments: Comment[];
}

const CommentsList = (props: Props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment: Comment) => (
        <CommentItem key={comment.id} text={comment.message} />
      ))}
    </ul>
  );
};

export default CommentsList;
