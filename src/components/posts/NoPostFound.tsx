import { Link } from 'react-router-dom';

import classes from './NoPostFound.module.css';

const NoPostFound = () => {
  return (
    <div className={classes.noposts}>
      <p>No Posts found!</p>
      <Link className="btn" to="/new-post">
        Add a Post
      </Link>
    </div>
  );
};

export default NoPostFound;
