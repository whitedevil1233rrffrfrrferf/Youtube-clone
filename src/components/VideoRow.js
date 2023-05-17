import React from "react";
import "../components/videorow.css"
function VideoRow({views,subs,description,timestamp,channel,title,image}){
    return(
        <div className="videorow">
            <img className="mainimg" src={image}></img>
            <div className="videorow_text">
                <h3>{title}</h3>
                <p className="videorow_headline">{channel} .<span className="videorow__subs"><span className="videorow_subsno">{subs}</span> subscribers {views} views.{timestamp}</span> </p>
                <p className="videorow_description">{description}</p>
            </div>
        </div>
    )
}
export default VideoRow;
