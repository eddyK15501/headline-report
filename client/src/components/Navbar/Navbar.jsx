import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Signup from "../Signup/Signup";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCreateAccountClick = () => {
    setShowSignUp(true);
  };

  return (
    <div>
      <nav
        style={{ backgroundColor: "#3D3D3D", color: "white", display: "flex" }}
      >
        <h1 style={{ margin: "1em" }}>Headline Report</h1>
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
          <li style={{ margin: "2em" }}>
            <div onClick={toggleDropdown} style={{ cursor: "pointer" }}>
              Log In {showDropdown ? "\u25B3" : "\u25BD"}
              {showDropdown && (
                <ul
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
                    borderRadius: ".5em"
                  }}
                >
                  <li className="item" style={{ padding: "10px" }}>
                    <label style={{ margin: "3px", display: "block" }}>
                      Username
                    </label>
                    <div className="ui input">
                      <input
                        type="text"
                        style={{
                          margin: "3px",
                          width: "100%",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </li>
                  <li className="item" style={{ padding: "10px" }}>
                    <label style={{ margin: "3px", display: "block" }}>
                      Password
                    </label>
                    <div className="ui input">
                      <input
                        type="password"
                        style={{
                          margin: "3px",
                          width: "100%",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </li>
                  <li className="item" style={{ padding: "10px" }}>
                    <button
                      className="ui button"
                      style={{
                        width: "100%",
                        backgroundColor: "white",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Log In{" "}
                    </button>
                  </li>
                  <li className="item" onClick={handleCreateAccountClick} style={{textAlign: "center", padding: 1}}>
                      Create An Account
                  </li>
                </ul>
              )}
            </div>
          </li>
          {/* {{#if loggedIn}} */}
          <li style={{ margin: "2em" }}>Profile</li>
          <li style={{ margin: "2em" }}>Log Out</li>
          {/* {{/if}} */}
        </ul>
      </nav>

      {showSignUp && (
        <Signup onClose={() => setShowSignUp(false)} />
      )}

    </div>
  );
};

export default Navbar;
