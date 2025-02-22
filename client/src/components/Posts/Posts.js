import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';
import { Grid, CircularProgress } from '@mui/material';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

Posts.propTypes = {
  setCurrentId: PropTypes.func.isRequired,
};

export default Posts;
