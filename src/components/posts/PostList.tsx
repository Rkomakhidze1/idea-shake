import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Post } from '../../types';

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
  posts: Post[];
}

const PostList = ({ posts }: Porps) => {
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
        {posts.map((post: Post) => (
          <PostItem
            key={post.id}
            id={post.id}
            author={post.author.username}
            text={post.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default PostList;
