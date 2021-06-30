import { useState,useEffect } from "react";
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);

    useEffect(() => {
        const stotageRef  = projectStorage.ref(file.name);

        stotageRef.put(file).on('state_changed',(snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        },(err) => {
            setError(err);
        },async() => {
            const url = await stotageRef.getDownloadURL();
            setUrl(url);
        })

    },[file])

    return { progress,url,error}
}

export default useStorage;