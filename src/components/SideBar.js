import React from "react";
import "../components/sidebar.css"
import "../components/Sidebarrow"
import SideBarrow from "../components/Sidebarrow";
function sidebar(){
    return(
    <div className="sidebar">
      
      <SideBarrow selected title="Home" icon="fa-solid fa-house "/>      
      <SideBarrow  title="Trending" icon="fa-solid fa-arrow-trend-up "/>       
      <SideBarrow title="Subscription" icon="fa-solid fa-pizza-slice "/>      
      <hr></hr>      
      <SideBarrow title="Library" icon="fa-sharp fa-solid fa-bookmark"/>      
      <SideBarrow title="History" icon="fa-sharp fa-solid fa-star"/>      
      <SideBarrow title="Your_videos" icon="fa-sharp fa-solid fa-face-smile"/>     
      <SideBarrow title="Watch later" icon="fa-sharp fa-solid fa-pen-nib"/>      
      <SideBarrow title="Liked videos" icon="fa-sharp fa-solid fa-thumbs-up"/>      
      <SideBarrow title="Show more" icon="fa-sharp fa-solid fa-angles-right"/>      
      <hr></hr>
    </div>
    )}
export default sidebar;
//<i class="fa-duotone fa-album-collection"></i>