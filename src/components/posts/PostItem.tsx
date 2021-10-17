import { Link } from 'react-router-dom';

import classes from './postItem.module.css';

const PostItem = (props: any) => {
  return (
    <li className={classes.item}>
      <figure>
        <div>
          <p>{props.text}</p>
        </div>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/Posts/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default PostItem;
