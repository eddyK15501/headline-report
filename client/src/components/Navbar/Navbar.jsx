import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Signup from "../Signup/Signup";

import Auth from "../../utils/auth";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

const Navbar = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const dropdownRef = useRef(null);

  const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log({...userFormData})

      const { data } = await loginUser({
        variables: { ...userFormData },
      });

      console.log(data)

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      alert("Something went wrong with your login credentials!");
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setUserFormData({ email: "", password: "" });
  };

  const handleCreateAccount = () => {
    setShowSignUp((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <nav
        style={{
          backgroundColor: "#3D3D3D",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 5rem 0 1rem",
        }}
      >
        <Link to='/' style={{ color: '#fff' }}>
          <h1 style={{ margin: "1em", fontSize: "2em", paddingTop: 3 }}>
            Headline Report
          </h1>
        </Link>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            position: "relative",
          }}
          className="nav-btns"
        >
          {!Auth.loggedIn() ? (
            <li style={{ margin: "2em" }}>
              <div
                ref={dropdownRef}
                onClick={toggleDropdown}
                style={{ cursor: "pointer" }}
              >
                Login 
                {showDropdown}
                {showDropdown && (
                  <form onSubmit={handleFormSubmit}>
                    <div
                      className="ui dropdown"
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        margin: 0,
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "#3D3D3D",
                        opacity: 1,
                        zIndex: 10,
                        color: "white",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: ".5em",
                        minWidth: '230px',
                        transform: 'translateX(-10%)'
                      }}
                    >
                      <div className="item" style={{ padding: "10px" }}>
                        <label style={{ margin: "3px", display: "block" }}>
                          Email
                        </label>
                        <div className="ui input" style={{ display: 'block' }}>
                          <input
                            name="email"
                            onChange={handleInputChange}
                            value={userFormData.email}
                            type="email"
                            style={{
                              width: "100%",
                            }}
                            onClick={(e) => e.stopPropagation()}
                            required
                          />
                        </div>
                      </div>
                      <div className="item" style={{ padding: "10px" }}>
                        <label style={{ margin: "3px", display: "block" }}>
                          Password
                        </label>
                        <div className="ui input" style={{ display: 'block' }}>
                          <input
                            name="password"
                            onChange={handleInputChange}
                            value={userFormData.password}
                            type="password"
                            style={{
                              width: "100%",
                            }}
                            onClick={(e) => e.stopPropagation()}
                            required
                          />
                        </div>
                      </div>
                      <div
                        className="item"
                        style={{ padding: "1.5rem 2.5rem" }}
                      >
                        <button
                          className="ui button"
                          style={{
                            width: "100%",
                            backgroundColor: "white",
                          }}
                          type="submit"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Login
                        </button>
                      </div>
                      <div
                        className="item create-account"
                        onClick={handleCreateAccount}
                        style={{ textAlign: "center", marginBottom: "0.5rem" }}
                      >
                        Create An Account
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </li>
          ) : (
            <>
              <li style={{ margin: "2em" }}>
                <Link to="/profile" style={{ color: "#fff" }}>
                  Profile
                </Link>
              </li>
              <li onClick={Auth.logout} style={{ margin: "2em", cursor: 'pointer' }}>
                Log Out
              </li>
            </>
          )}
        </ul>
      </nav>

      {showSignUp && <Signup toggleModal={handleCreateAccount} />}
    </div>
  );
};

export default Navbar;
