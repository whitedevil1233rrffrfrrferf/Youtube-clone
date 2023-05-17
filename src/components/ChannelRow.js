import React from "react";
import "../components/channelrow.css"
function ChannelRow({image,Channel,verified,subs,noofvideos,description}){
    return(
        <div className="channelrow">
            <img className="mainimage" src={image}></img>
            <div className="channelrow_text">
                <h4>{Channel}{verified && <i class="fa-sharp fa-solid fa-check"></i>}</h4>
                <p>{subs} subscribers.{noofvideos} videos</p>
                
                <p>{description}</p>
            </div>
        </div>
    )
}
export default ChannelRow;