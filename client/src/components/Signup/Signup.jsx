/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Auth from "../../utils/auth";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

const Signup = ({ toggleModal }) => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [createUser, _] = useMutation(ADD_USER);
  const [modalVisible, setModalVisible] = useState(true);
  const modalRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await createUser({
        variables: { ...userFormData }
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      alert('Something went wrong with your signup!');
    }

    setUserFormData({
      username: '',
      email: '',
      password: ''
    });
  }

  const handleBackdropClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalVisible(false);
      toggleModal();
    }
  };


  return (
    <>
      {modalVisible && (
        <>
          <div
            onClick={handleBackdropClick}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
          ></div>

          <div
            ref={modalRef}
            className="ui card"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "solid 1px black",
              borderRadius: ".5em",
              padding: "1em",
              minWidth: "30%",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <form onSubmit={handleFormSubmit} style={{ width: '80%', padding: '1rem 0', textAlign: 'center' }}>
            <h4>Username</h4>
            <input
              type="text"
              placeholder="Your Username"
              onChange={handleInputChange}
              value={userFormData.username}
              name="username"
              style={{ borderRadius: ".5em", width: "100%" }}
              required
            />
            <h4>Email</h4>
            <input
              type="email"
              placeholder="Your Email"
              onChange={handleInputChange}
              value={userFormData.email}
              name="email"
              style={{ borderRadius: ".5em", width: "100%" }}
              required
            />
            <h4>Password</h4>
            <input
              type="password"
              placeholder="Your Password"
              onChange={handleInputChange}
              value={userFormData.password}
              name="password"
              style={{ borderRadius: ".5em", width: "100%" }}
              required
            />
            <div>
              <button
                className="ui button"
                style={{
                  width: "60%",
                  backgroundColor: "#4D4D4D",
                  color: "white",
                  margin: "2.5em auto 0",
                }}
                type="submit"
              >
                Create Account
              </button>

            </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Signup;
