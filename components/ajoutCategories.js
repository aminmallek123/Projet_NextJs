"use client";
import React, { useState } from 'react';
import { TextField, Box, Button, Modal, Typography } from '@mui/material';
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
import { UploadFirebase } from '../utils/UploadFirebase';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 750,
    maxHeight: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: '#000',
    borderRadius: '20px',
    padding: '40px 30px 60px',
    textAlign: 'center',
};
function AjoutCat() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [file, setFile] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date_creation, setDate_creation] = useState("");
    const [categorie, setCategorie] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [price, setPrice] = useState("");
    const handleUpload = (event) => {
        event.preventDefault();
        if (!file[0].file) {
            alert("Please upload an image first!");
        }
        else {
            console.log(file[0].file)
            resultHandleUpload(file[0].file, event);
        }
        if (!file[0].file) {
            alert("Please upload an image first!");
        }
    };
    const resultHandleUpload = async (file) => {

        try {

            const url = await UploadFirebase(file);
            console.log(url);

            handlesave(url)
        } catch (error) {
            console.log(error);
        }
    }

    const handlesave = async (url) => {
        setImage(url);
        const cat = {
            title: title, description: description,
            date_creation: date_creation,
            categorie: categorie,
            Image: url,
            video: video,
            price: price
        };
        console.log(cat);
        const res = await (await
            fetch('http://localhost:3001/api/movie', {
                method: 'POST',
                body: JSON.stringify(cat),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json()
        if (res) {
            console.log('successfully inserted!')

            handleClose()
            setFile("")
            setTitle("")
            setDescription("")
            setDate_creation("")
            setCategorie("")
            setImage("")
            setVideo("")
            setPrice("")
        }
        else {
            console.log(res);
        }
    }
    return (
        <div>
            <Button type="button" className="btn btn-primary" onClick={handleOpen}>
                ADD
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ maxHeight: '550px', overflowY: 'scroll' }}>
                    <hr />
                    <div className="mb-3">
                        <Button type="button" className="btn btn-danger"
                            onClick={(event)=>handleUpload(event)}>Save</Button>
                        <Button type="button" className="btn btn-secondary"
                            onClick={handleClose}>Close</Button>
                    </div>
                    <div className="mb-4">
                        <TextField variant="outlined" name="title" label="title"
                            onChange={e=>setTitle(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <TextField variant="outlined" name="description" label="description"
                            onChange={e=>setDescription(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <TextField variant="outlined" name="date_creation" label="date_creation"
                            onChange={e=>setDate_creation(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <TextField variant="outlined" name="categorie" label="categorie"
                            onChange={e=>setCategorie(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <TextField variant="outlined" name="price" label="Prix"
                            onChange={e=>setPrice(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <TextField variant="outlined" name="video"
                            label="video" onChange={e=>setVideo(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <FilePond
                            files={file}
                            allowMultiple={false}
                            onupdatefiles={setFile}
                            labelIdle='<span class="filepond--label-action">Browse One</span>'
                        />
                    </div>
                    


                </Box>
            </Modal>
        </div>
    )
}
export default AjoutCat