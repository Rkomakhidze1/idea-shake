import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/auth';
import { RootState } from '../../store/store';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Posts</div>
      <nav className={classes.nav}>
        <ul>
          {isAuthenticated ? (
            <>
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
              <li>
                <NavLink
                  to="/signin"
                  onClick={() => {
                    dispatch(logout());
                    localStorage.removeItem('token');
                  }}
                  activeClassName={classes.active}
                >
                  Log out
                </NavLink>
              </li>
            </>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
