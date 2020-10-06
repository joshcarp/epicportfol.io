import React from "react";
export default function PopModal() {
    if(document.getElementById("edit-modal").style.display==="block"){
        document.getElementById("edit-modal").style.display="none"
    }
    else {document.getElementById("edit-modal").style.display="block";}
    console.log("actually doing something");
}

window.PopModal = PopModal