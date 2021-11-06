import classes from './CommentItem.module.css';

interface Props {
  text: string;
}

const CommentItem = (props: Props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
