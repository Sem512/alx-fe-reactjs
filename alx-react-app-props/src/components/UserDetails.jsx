import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails({ userData }) {
    userData = useContext(UserContext);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;