import { Link } from 'react-router-dom';

import classes from './NoPostsFound.module.css';

const NoPostsFound = () => {
  return (
    <div className={classes.noposts}>
      <p>No Posts found!</p>
      <Link className="btn" to="/new-post">
        Add a Post
      </Link>
    </div>
  );
};

export default NoPostsFound;
