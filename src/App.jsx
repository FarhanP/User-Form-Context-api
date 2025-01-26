import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <UserContextProvider>
      <div className="app">
        <h2>Welcome to Login Form (using Context API)</h2>
        <Login />
        <UserProfile />
      </div>
    </UserContextProvider>
  );
}

export default App;
