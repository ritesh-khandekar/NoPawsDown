import React from 'react'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useState } from 'react';

const ImageCrop = ({ image, setCropData, setImgCrop }) => {

    const [cropper, setCropper] = useState();

    const cropImage = (e) => {
        if (typeof cropper !== undefined) {
            setCropData(cropper.getCroppedCanvas().toDataURL())
            setImgCrop(false)
        }
    }

    return <div style={{ left: 0, zIndex: 10, width:"100%" }} className="container position-fixed top-0 vw-100 w-100 h-100 bg-white p-2 text-center">
        <img className="float-left img-preview" />
        <Cropper
            style={{ width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={false}
            autoCropArea={1}
            cropBoxResizable={false}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
                setCropper(instance);
            }}
            guides={false}
        />
        <button className="btn m-2 btn-lg btn-primary px-5" onClick={cropImage}>Crop Image and Upload</button>
    </div>
}

export default ImageCrop