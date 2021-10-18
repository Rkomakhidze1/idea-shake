import { Route, Switch, Redirect } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import PostDetail from './pages/PostDetail';
import NewPost from './pages/NewPost';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Signin from './pages/Signin';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/posts" />
        </Route>
        <Route path="/posts" exact>
          <AllPosts />
        </Route>
        <Route path="/posts/:postId">
          <PostDetail />
        </Route>
        <Route path="/new-post">
          <NewPost />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
