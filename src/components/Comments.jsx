import { useContext, useEffect } from 'react';
import ApiContext from '../context/ApiContext';

const Comments = () => {
  const { comments, loading } = useContext(ApiContext);
  

  return (
    <div>Comments</div>
  )
}

export default Comments