
import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, updateUserThunk } from "./users-thunks";
import { logoutThunk } from "../services/auth-thunks";
import { useNavigate } from "react-router";
function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const [ profile, setProfile ] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleUpdate = () => {
    try {
      dispatch(updateUserThunk(profile));
    } catch (e) {
      alert(e);
    }
  };


    return (
        <div>
         <h1>Profile Screen</h1>
         {profile && (<div>
           <div>
            <label>First Name</label>
            <input type="text" value={profile.username}
             onChange={(event) => {
              const newProfile = {
               ...profile, username: event.target.value,
              };
              setProfile(newProfile);
             }}/>
           </div>
           <div>
            <label>Last Name</label>
            <input type="text" value={profile.lastName}
             onChange={(event) => {
              const newProfile = {
               ...profile, lastName: event.target.value,
              };
              setProfile(newProfile);
             }}/>
           </div></div>
         )}
         <button className="btn btn-danger"
          onClick={() => {
            dispatch(logoutThunk());
            navigate("/login");
          }}>                   Logout</button>
         <button onclick = {handleUpdate()} className="btn btn-primary" >Update  </button>
         <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        </div> );
}
export default ProfileScreen;