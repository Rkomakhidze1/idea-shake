import classes from './HighlightedPost.module.css';

interface Props {
  text: string;
  author: string;
}

const HighlightedPost = (props: Props) => {
  return (
    <figure className={classes.post}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedPost;
