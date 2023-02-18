import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';

// imports
import Keys from "../../config/Keys";

const API_URL = Keys.API_URL;

const DropzoneComponent = () => {

    const [image, setImage] = useState([]);


    const onDrop = useCallback((acceptedFiles) => {

        // create a new FormData object
        const formData = new FormData();

        // append each selected file to the FormData object
        acceptedFiles.forEach((file) => {
            formData.append('file', file);
        });

        // make a POST request to the server to upload the files
        axios
            .post('http://localhost:4000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    // calculate and log the upload progress
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    console.log(percentCompleted);
                }
            })
            .then((response) => {
                setImage(oldImages => [...oldImages, response.data.image]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <div className={"upload-container"}>
            <div {...getRootProps()} className={"upload-input con-mid"} style={{width: "100%"}}>
                <input {...getInputProps()} />
                <p>Drag and drop some files here, or click to select files</p>

                <div className={"img-container"}>
                {image.length !== 0 ?
                    image.map(((singleImage, index) => (
                            <img key={index} src={`${API_URL}uploads/${singleImage}`} alt={"upload"}
                                 style={{width: "200px"}}/>
                        )
                    ))
                    : ""
                }
                </div>

            </div>
        </div>
    );
};

export default DropzoneComponent;
