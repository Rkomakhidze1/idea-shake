import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Posts</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/posts" activeClassName={classes.active}>
              All Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-post" activeClassName={classes.active}>
              Add a Post
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
