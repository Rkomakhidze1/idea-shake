import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

interface Props {
  children: JSX.Element;
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
