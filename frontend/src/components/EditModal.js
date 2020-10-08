import React, { useState } from 'react'
import './EditModal.css'
import PopModal from '../components/PopModal'
import handleFiles from '../components/handleFiles'
const yaml = require('js-yaml');
const { profilesClient } = require('./../proto/api_grpc_web_pb.js');
const profiles = new profilesClient('https://profiles.epicportfol.io');
const { getuserRequest, profile } = require('./../proto/api_pb.js');
export default function EditModal(props) {

    const updateUser = (user) => console.log(Object.assign(new profile(), yaml.safeLoad(user)));

    //this updates the the text area with the profile data and allows you to edit it
    const [jsonValue, setJson] = useState(yaml.safeDump(props.profile));
    const onChange = (event) => setJson(event.target.value);
    const fileUploader = React.createRef();
    
    return (
        <div id="edit-modal" className="edit-mod">
            <div id="modal-title">Edit your profile</div>
            <textarea id="modal-textarea" rows="10" columns="80" value={jsonValue} onChange={onChange}> </textarea>
            <br />
            <input type="file" id="fileupload" ref={fileUploader}
            onChange = {e => handleFiles(e.target.files)} />

            <label class="button" for="fileElem">Select files</label>
            <br />
            <button id="submit-edit" onClick={() => updateUser(jsonValue)}>Submit</button>
            <button onClick={() => PopModal()}>Close</button>s

        </div>

    )

}
