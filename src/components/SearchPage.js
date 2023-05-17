import React from "react";
import "../components/searchpage.css"
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";
function SearchPage(){
    return(
        <div className="searchpage">
            <div className="searchpage_filter">
              <i class="fa-sharp fa-solid fa-sliders"></i>
              <h2>Filter</h2>
            </div>
            <hr></hr>
            <ChannelRow 
                image="https://yt3.googleusercontent.com/ytc/AL5GRJWBPljIFKkbqGc1oukcb7gDtXjLOH97cbqCZLib=s900-c-k-c0x00ffffff-no-rj"
                Channel="CheekyCheeka"
                verified
                subs="237k"
                noofvideos={200}
                description="i Welcome to my official channel, my name is Kris Srikkanth and my friends call me Cheeka,  i m a former Indian cricket Captain and i thought i would make some videos about my experiences in life & cricket both on and off the field. Over the course of my life i am blessed to have met some extraordinary people and in this channel i will be talking about those experiences. Hope you enjoy my style of talking and lets see whats in store for the future!"
            />
            <hr></hr>
            <VideoRow 
                image="https://i.ytimg.com/vi/0pMOOpnug4M/maxresdefault.jpg"
                title="India Trounce Australia to Go 2-0  Worst AUS side, Potlam Side Says Cheeka | BGT 2nd Test Review"
                description="this is the worst australian side"
                views="164k"
                channel="Cheeky Cheeka"
                subs="237k"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/lUwfjLDu88U/maxresdefault.jpg"
                title="Axar Rescues India but Australia in control | IPL schedule out for 2023 | Cheeky Cheeka"
                description="india has the best lower order"
                views="164k"
                channel="Cheeky Cheeka"
                subs="237k"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/BbPo7Ikyr4c/maxresdefault.jpg"
                title="Is Shubman Gill the next superstar? | IND vs NZ T20 Series Review | Cheeky Cheeka"
                description="is Shubman gill the next superstar"
                views="164k"
                channel="Cheeky Cheeka"
                subs="237k"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/gd5AtfqytAo/maxresdefault.jpg"
                title="Should India have won comfortably? | IND vs NZ 2nd T20 Review | Cheeky Cheeka"
                description="Should India have won comfortably?"
                views="164k"
                channel="Cheeky Cheeka"
                subs="237k"
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/5xQ3pf4P468/maxresdefault.jpg"
                title="What Went Wrong for India | IND vs NZ 1st T20 Review | Cheeky Cheeka"
                description="india should have won"
                views="164k"
                channel="Cheeky Cheeka"
                subs="237k"
            />

        </div>
    )
}
export default SearchPage