import React from 'react';
import ImageDropzone from "./Layout/Dropzone";

const Upload = () => {
    return (
        <div className={"container"}>
            <div className={"form-container"}>
                <ImageDropzone/>
            </div>
        </div>
    );
};

export default Upload;