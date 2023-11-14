/* eslint-disable no-unused-vars */
import Auth from "../utils/auth";
import { removeNewsId } from "../utils/localStorage";

import { useQuery, useMutation } from "@apollo/client";

import { GET_ME } from "../utils/queries";
import { REMOVE_NEWS } from "../utils/mutations";

const Profile = () => {
  const { loading, data } = useQuery(GET_ME);

  const [removeNews] = useMutation(REMOVE_NEWS, {
    refetchQueries: [{ query: GET_ME }],
    awaitRefetchQueries: true,
  });

  if (loading) {
    return <div>Loading Data...</div>;
  }

  const userData = data?.me || {};
  console.log(userData);

  const handleRemoveNews = async (newsId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeNews({
        variables: { newsId },
      });

      removeNewsId(newsId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "2em" }}>
        Welcome Back{" "}
        {userData.username.charAt(0).toUpperCase() + userData.username.slice(1)}
        !
      </h2>
    </div>
  );
};

export default Profile;
