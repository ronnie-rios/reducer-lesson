import { useContext, useEffect } from 'react';
import { fetchAllPosts } from '../context/ApiAction';
import { useNavigate } from 'react-router-dom';
import ApiContext from '../context/ApiContext';


const Posts = () => {
  const { posts, loading, dispatch } = useContext(ApiContext);

  const fetchAll = async () => {
    dispatch=({ type: 'SET_LOADING'})
    const data = await fetchAllPosts()
    dispatch({ type: 'GET_POSTS', payload: data})
  }

  useEffect(()=> {
    fetchAll()
  },[dispatch])
  
  const navigate = useNavigate()
  if(!loading) {
    return (
      <>
        <h3>check out some posts</h3>
        {posts.map(post => (
          <div key={post.id}>
            <h4>{post.id}: {post.title}</h4>
            <button onClick={()=> navigate(`/posts/${post.id}`)}>view details</button>
          </div>
        ))}
      </>
      )
  } else {
    return <h3>loading. . .</h3>
  }
}
export default Posts