import classes from './HighlightedPost.module.css';

const HighlightedPost = (props: any) => {
  return (
    <figure className={classes.post}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedPost;
