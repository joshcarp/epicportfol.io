import React from "react";
import './ImageBoxStyle.css'
class ImageBox extends React.Component{
    constructor(props) {
        super(props);
        this.modalZoom = this.modalZoom.bind(this);
    }
    modalZoom(caller) {
            console.log(caller.target.src);
            var modal = document.getElementById("modal");
            modal.style.visibility="visible";
            var FullImage = document.getElementById("FullImage");
            FullImage.src = caller.target.src;
    }
    render(){
    
        return(
            <div id="ImageBox">
                <div id="Username"><p>Placeholder</p></div>
                <div id="Desc"><p>Also a placeholder para</p></div>
                <div id="Pic"><img onClick={this.modalZoom} src="https://cataas.com/cat" id="picsrc"></img></div>
                <div id="Pic1"><img onClick={this.modalZoom} src="https://cataas.com/cat" id="picsrc1"></img></div>
                <div id="Pic2"><img onClick={this.modalZoom}  src="https://cataas.com/cat" id="picsrc2"></img></div>
                <div id="modal"><img id="FullImage"></img> </div>

            
            </div>
        );
    }
}
export default ImageBox;