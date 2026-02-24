import { useState } from "react";

const Header = () => {
  const [islogin, setLoginStatus] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design_617585-671.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li className="login-btn">
            <button
              onClick={() => {
                console.log("Login Button clicked");
                const loginStatus = islogin == "Login" ? "Logout" : "Login";
                setLoginStatus(loginStatus);
              }}
            >
              {islogin}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
