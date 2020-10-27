import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import { EditorState } from 'draft-js';
import {withStyles} from "@material-ui/core";
import './styles.css';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class ProfileEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        }
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    };
    onEditorStateChange (editorState) {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (

            <div className="demo-root">
            <div className="demo-section">
                <div className="demo-section-wrapper">
                    <div className="demo-editor-wrapper">
                        <Editor
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={this.onEditorStateChange}
                        />
                        <textarea
                            disabled
                            className="demo-content no-focus"
                            value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
                        />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
const styles = `.demo-root {
  width: 90%;
  display: flex;
  font-family: Roboto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.demo-label {
  display: block;
  font-size: 20px;
  font-weight: 500;
  margin: 50px 0 25px;
}
.demo-label-high {
  display: block;
  font-size: 20px;
  font-weight: 500;
  margin: 50px 0 90px;
}
.demo-subLabel {
  margin-bottom: 20px;
}
.demo-editorSection {
  display: flex;
  justify-content: space-between;
}
.demo-wrapper {
  width: 100% !important;
  display: block !important;
  margin-bottom: 25px !important;
  height: 400px !important;
}
.demo-wrapper-medium {
  width: 650px !important;
  display: block !important;
  margin-bottom: 50px !important;
  height: 300px !important;
}
.demo-editor {
  height: 275px !important;
  border: 1px solid #F1F1F1 !important;
  padding: 5px !important;
  border-radius: 2px !important;
}
.demo-editorWrapper {
}
.demo-content {
  border: 1px solid #F1F1F1;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  border-radius: 2px;
  resize: none;
  height: 200px;
}
.demo-toolbar-absolute {
  position: absolute !important;
  top: -40px !important;
  width: 550px !important;
  border-radius: 3px !important;
  background: #f3f3f3 !important;
  border: 1px solid #e3e3e3 !important;
}
.demo-toolbar-absolute-high {
  position: absolute !important;
  top: -80px !important;
  width: 550px !important;
  border-radius: 3px !important;
  background: #f3f3f3 !important;
  border: 1px solid #e3e3e3 !important;
}
.demo-editor-plain {
  height: 80% !important;
  border-width: 0px !important;
}
.demo-editor-embedded {
  height: 90% !important;
  border-width: 0px !important;
}
.demo-wrapper-relative {
  display: block !important;
  position: relative !important;
  margin-bottom: 25px !important;
  height: 200px !important;
}
.demo-wrapper-relative-long {
  width: 715px !important;
  display: block !important;
  position: relative !important;
  margin-bottom: 25px !important;
  height: 450px !important;
}
.bordered-option-classname {
  border: 1px solid #e3e3e3 !important;
}
.demo-toolbar-absolute > div:not(:last-of-type) {
  border-right: 2px solid #e3e3e3;
  padding-right: 5px;
}
.demo-toolbar-absolute > div:not(:first-of-type) {
  padding-left: 5px;
}
.demo-toolbar-custom {
  border-color: rgb(0,47,126) !important;
  background-color: #9EBEF5 !important;
}
.demo-editor-custom {
  height: 200px !important;
  border: 1px solid #F1F1F1 !important;
  padding: 5px !important;
  height: 75% !important;
  border-radius: 2px !important;
  border-color: rgb(0,47,126) !important;
}
.demo-option-custom {
  width: 15px !important;
  height: 15px !important;
  border-color: rgb(0,47,126) !important;
  color: rgb(0,47,126);
}
.demo-option-custom-wide {
  width: 125px !important;
  height: 25px !important;
  border-color: rgb(0,47,126) !important;
  color: rgb(0,47,126) !important;
}
.demo-option-custom-medium {
  height: 25px !important;
  border-color: rgb(0,47,126) !important;
  color: rgb(0,47,126) !important;
}
.demo-dropdown-custom {
  border-color: rgb(0,47,126) !important;
}
.demo-popup-custom {
  border-color: rgb(0,47,126) !important;
  padding: 5px !important;
}
.demo-popup-custom input {
  border-color: rgb(0,47,126) !important;
}
.demo-popup-custom button {
  border-color: rgb(0,47,126) !important;
}
.demo-section-wrapper {
  display: flex;
}
.demo-editor-wrapper {
  width: 60%;
}
.demo-section {
  margin: 50px 30px 20px;
  width: 95%;
}
.ReactCodeMirror {
  width: 38%;
  margin-left: 2%;
  border: 1px solid #e4e4e4;
  height: 400px;
}
.CodeMirror {
  height: 400px !important;
}
.demo-custom-option {
  width: 26px;
  height: 26px;
  border: 1px solid #f1f1f1;
  text-align: center;
  padding-right: 5px;
  padding-bottom: 2px;
  cursor: pointer;
}
`
export default withStyles(styles)(ProfileEditor);
