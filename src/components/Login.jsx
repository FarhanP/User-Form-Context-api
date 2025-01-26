import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, userPassword });
  };

  return (
    <div className="form">
      <h2 className="form-heading">Login Form</h2>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        value={username}
        placeholder="Username"
      />
      <input
        onChange={(e) => setUserPassword(e.target.value)}
        type="password"
        value={userPassword}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
