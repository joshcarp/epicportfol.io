import React from "react";
import './ProfilePicStyle.css'
class ProfilePic extends React.Component{
    render(){
        return(
            <div id="ProfileBox">
            <div id="CircleGridItem"><div id="ProfileCircle"></div></div>
            <div id="Username"><p>Placeholder</p></div>
            <div id="Bio">
            <p id="BioContent">What is Lorem Ipsum Lorem Ipsum is simply dummy
            text of the printing and typesetting industry
            </p>
            </div>
            </div>
        );
    }
}
export default ProfilePic;