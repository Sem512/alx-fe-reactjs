import { useContext } from "react";

function UserProfile(props){
  props=useContext(props)
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };


export default UserProfile;