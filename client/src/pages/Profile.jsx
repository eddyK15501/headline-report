/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { getSavedNewsIds } from '../utils/localStorage';
import { GET_ME } from '../utils/queries';

// path is to localhost:3000/profile; build this Profile component to render username, email, and the saved news
const Profile = () => {
  const { loading, error, data } = useQuery(GET_ME);
  const [savedNews, setSavedNews] = useState([]);
  const [userData, setUserData] = useState({});
  
  useEffect(() => {
    if (!loading && !error && data) {
      const { username, email } = data.me;
      const savedNewsIds = getSavedNewsIds();
      setUserData({ username, email });
    }
  }, [loading, error, data]);

  return (
    <div style={{display: "flex", justifyContent: "center",flexDirection: "column", alignContent: "center"}}>
      <h2 style={{textAlign: "center", marginTop: "2em"}}>Welcome Back ......</h2>
      
    </div>
   
  )
}

export default Profile