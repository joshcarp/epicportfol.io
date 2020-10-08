import { uploadClient } from "../proto/api_grpc_web_pb";
import { uploadRequest} from "../proto/api_grpc_web_pb";
export default function handleFiles(filelist){
    const uploader = new uploadClient('https://upload.epicportfol.io');
    const reader = new FileReader()

    reader.onload = function () {
        console.log(reader.result);
        var u = new uploadRequest();
        u.setName(filelist[0].name);
        u.setContent(Uint8Array.from(reader.result));
        
        uploader.upload(u,{},function(err,response){
            //print in text area
            console.log(response);
        })
       };
    reader.readAsArrayBuffer(filelist[0]);
    
   
    
}