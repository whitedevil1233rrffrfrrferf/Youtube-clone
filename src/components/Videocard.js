import React from "react";
import "../components/videocard.css";
function Videocard({image,title,channel,views,timestamp,channelimage}){
    return(
        <div className="videoCard">
            <img className="videocard_thumbnail"
            src={image}
            alt={channel}>
            </img>
            <div className="videocard_info">
                <img src={channelimage} alt={channel} className="channel_img"></img>
                <div className="videocard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views}.{timestamp}</p>
                </div>
            </div>
            

        </div>
        
    )
}
export default  Videocard;
