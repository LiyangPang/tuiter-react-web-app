import { Routes, Route } from "react-router";
import React, { useState, useEffect } from "react";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen.js";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem from "./who-to-follow/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow";

import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';



function Tuiter() {
 
  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
  }

 return (
  
   <div>
     
     <div className="row">
       <div className="col-2" >
         {useViewport().width > 1000 &&<NavigationSidebar />}
         {useViewport().width <= 1000 &&<FontAwesomeIcon icon={faList} size = "xl"/>}
       </div>
       {useViewport().width > 1300 && <div className="col-7">
         <Routes>
           <Route path="/home" element={<HomeScreen/>} />
           <Route path="/explore" element={<ExploreScreen/>} />
           <Route path="/notifications" element={<h1>Notifications</h1>}/>
           <Route path="/bookmarks" element={<BookmarksScreen/>} />
           <Route path="/profile" element={<ProfileScreen/>} />
         </Routes>
       </div>}
       {useViewport().width <= 1300 && <div className="col-10">
         <Routes>
           <Route path="/home" element={<HomeScreen/>} />
           <Route path="/explore" element={<ExploreScreen/>} />
           <Route path="/notifications" element={<h1>Notifications</h1>}/>
           <Route path="/bookmarks" element={<BookmarksScreen/>} />
           <Route path="/profile" element={<ProfileScreen/>} />
         </Routes>
       </div>}


       {useViewport().width > 1300 && <div className="col-3" >
         <WhoToFollowList />

       </div>}
     </div>
   </div>
   
 );
}
export default Tuiter;