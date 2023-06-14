
import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, logoutThunk,updateUserThunk } from "./users-thunks";
import { useNavigate } from "react-router";
function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const [ profile, setProfile ] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
         <h1>Profile Screen</h1>
         {profile && (<div>
           <div>
            <label>First Name</label>
            <input type="text" value={profile.firstName}
             onChange={(event) => {
              const newProfile = {
               ...profile, firstName: event.target.value,
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
         <button
          onClick={() => {
            dispatch(logoutThunk());
            navigate("/login");
          }}>                   Logout</button>
         <button >Save  </button>
         <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        </div> );
}
export default ProfileScreen;