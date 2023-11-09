import { useState } from "react";
import "semantic-ui-css/semantic.min.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
                  className="ui dropdown-menu"
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#3D3D3D",
                    opacity: 1,
                    color: "white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
                          borderRadius: ".5em",
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
                          borderRadius: ".5em",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </li>
                  <li className="item" style={{ padding: "10px" }}>
                    <button
                      className="ui button"
                      style={{
                        margin: "3px",
                        width: "100%",
                        backgroundColor: "white",
                        color: "#3D3D3D",
                        border: "none",
                        padding: "8px",
                        borderRadius: ".5em",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Log In{" "}
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </li>
          {/* if logged in */}
          <li style={{ margin: "2em" }}>Profile</li>
          <li style={{ margin: "2em" }}>Log Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
