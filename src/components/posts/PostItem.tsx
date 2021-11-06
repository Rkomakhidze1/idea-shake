import { Link } from 'react-router-dom';

import classes from './PostItem.module.css';

interface Props {
  text: string;
  author: string;
  id: number | string;
}

const PostItem = (props: Props) => {
  return (
    <li className={classes.item}>
      <figure>
        <div>
          <p>{props.text}</p>
        </div>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/posts/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default PostItem;
