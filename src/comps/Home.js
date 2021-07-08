import React, { useState } from "react";
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import NavBari from "./navbar/NavBari";
import UploadForm from './UploadForm';

const Home = () => {
    const [selectedImg,setSelectedImg] = useState(null);

    return (
        <div>
        <NavBari />
        <UploadForm />
        <ImageGrid  setSelectedImg={setSelectedImg}/>
        {selectedImg && <Modal selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        /> }
      </div>
    );
}

export default Home;
