import React from "react";
import "../components/sidebarrow.css"
function SideBarrow({selected,icon,title}){
    return(
    <div className={`Sidebarrow ${selected && "selected"}`}>  
      <i class={icon}></i>
      <h2 className="sidebarow_title">{title}</h2>
      
    </div>
    )
}
export default SideBarrow;