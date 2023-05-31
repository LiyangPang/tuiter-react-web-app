import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen.js";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem from "./who-to-follow/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow";


function Tuiter() {
 return (
   <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
         <Routes>
           <Route path="/home" element={<HomeScreen/>} />
           <Route path="/explore" element={<ExploreScreen/>} />
           <Route path="/notifications" element={<h1>Notifications</h1>}/>
           <Route path="/bookmarks" element={<BookmarksScreen/>} />
           <Route path="/profile" element={<ProfileScreen/>} />
         </Routes>
       </div>
       <div className="col-3">
         <WhoToFollowList/>

       </div>
     </div>
   </div>
 );
}
export default Tuiter;