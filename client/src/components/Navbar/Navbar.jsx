import { useState, useEffect, useRef } from "react";
import Signup from "../Signup/Signup";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCreateAccountClick = () => {
    setShowSignUp(prev => !prev);
  };

  const handleOutsideClick = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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
            <div ref={dropdownRef} onClick={toggleDropdown} style={{ cursor: "pointer" }}>
              Log In {showDropdown ? "\u25B3" : "\u25BD"}
              {showDropdown && (
                <form>
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
                    }}
                  >
                    <div className="item" style={{ padding: "10px" }}>
                      <label style={{ margin: "3px", display: "block" }}>
                        Email
                      </label>
                      <div className="ui input">
                        <input
                          required
                          type="email"
                          style={{
                            width: "100%",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>
                    <div className="item" style={{ padding: "10px" }}>
                      <label style={{ margin: "3px", display: "block" }}>
                        Password
                      </label>
                      <div className="ui input">
                        <input
                          required
                          type="password"
                          style={{
                            width: "100%",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>
                    <div className="item" style={{ padding: '1.5rem 2.5rem' }}>
                      <button
                        className="ui button"
                        style={{
                          width: "100%",
                          backgroundColor: "white",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Login
                      </button>
                    </div>
                    <div
                      className="item create-account"
                      onClick={handleCreateAccountClick}
                      style={{ textAlign: "center", marginBottom: '0.5rem' }}
                    >
                      Create An Account
                    </div>
                  </div>
                </form>
              )}
            </div>
          </li>
          {/* {{#if loggedIn}} */}
          <li style={{ margin: "2em" }}>Profile</li>
          <li style={{ margin: "2em" }}>Log Out</li>
          {/* {{/if}} */}
        </ul>
      </nav>

      {showSignUp && <Signup toggleModal={handleCreateAccountClick} />}
    </div>
  );
};

export default Navbar;
