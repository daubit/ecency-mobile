import get from 'lodash/get';
/* eslint-disable array-callback-return */
export default (posts, recommendedUser) => {
  const updatedPosts = [];

  if (recommendedUser !== 0) {
    recommendedUser.forEach((user) => {
      posts.forEach((post) => {
        if (get(post, 'author') === get(user, 'name')) {
          updatedPosts.push(post);
        }
      });
    });
  }

  return updatedPosts;
};
/* eslint-enable */
