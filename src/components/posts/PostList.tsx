import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { data } from '../../dummy-data';

import PostItem from './PostItem';
import classes from './PostList.module.css';

// const sortPosts = (posts: any, ascending: any) => {
//   return posts.sort((postA: any, postB: any) => {
//     if (ascending) {
//       return postA.id > postB.id ? 1 : -1;
//     } else {
//       return postA.id < postB.id ? 1 : -1;
//     }
//   });
// };

interface Porps {
  posts: Object;
}

const PostList = (props: Porps) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  // const sortedPosts = sortPosts(props.posts, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {data.map((post: any) => (
          <PostItem
            key={post.id}
            id={post.id}
            author={post.author}
            text={post.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default PostList;
