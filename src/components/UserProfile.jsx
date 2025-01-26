import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <div className="login-message no-login">Please log in!</div>;
  } else {
    return (
      <div className="login-message yes-login">
        Welcome, <strong>{user.username}!</strong>
      </div>
    );
  }
}

export default UserProfile;
