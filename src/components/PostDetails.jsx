import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePost, fetchPostComments } from '../context/ApiAction';
import ApiContext from '../context/ApiContext';
import Comments from './Comments';

const PostDetails = () => {
  const { post, loading, dispatch } = useContext(ApiContext);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const fetchSinglePostData = async () => {
      const postData = await fetchSinglePost(id);
      dispatch({ type: 'GET_SINGLE_POST', payload: postData })
    }
    const fetchComments = async () => {
      const commentData = await fetchPostComments(id);
      dispatch({ type: 'GET_COMMENTS', payload: commentData })
    }
    fetchSinglePostData();
    fetchComments();
  }, [dispatch, id])

  if (!loading) {
    return (
      <div>
        <h3>{post.id}: {post.title}</h3>
        <p>{post.body}</p>
        {post && <Comments />}
      </div>
      )
  } else {
    return (
      <h3>Loading. . .</h3>
    )
  }
}

export default PostDetails