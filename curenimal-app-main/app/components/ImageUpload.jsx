// package-lock.json issue, using JS instead of TS to fix.

import React, { useState, useEffect } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { setDoc, Timestamp, collection } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

const ImageUpload = () => {

   // State variables to manage the selected image, caption, upload progress,
  const [picSelected, setPicSelected] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  // downloadURL and uploaded status 
  const [downloadURL, setDownloadURL] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);

  //firebase storage reference for image upload
  const storage = getStorage();


  // useEffect hook to handle image upload logic.
  useEffect(() => {
    if (picSelected) {
      // Create a reference to the storage location of the selected image
      const storageRef = ref(storage, `images/${picSelected.name}`);

      // Create a resumable upload task for the selected image 
      const uploadTask = uploadBytesResumable(storageRef, picSelected);


      // Event listeners for tracking upload progress and completion.
      uploadTask.on(
        'state_changed',  
        (snapshot) => {
          // to update the upload progress as a percentage.
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
           // Handle errors during the upload
          console.error('Error during upload: ', error);
        },
        () => {
          // Get the download URL and update state, on upload
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            setDownloadURL(url);
            try {
              // Add a document to the 'images' collection with image details.
              const imageCollectionRef = collection(db, 'images');
              await setDoc(imageCollectionRef, {
                url,
                caption,
                uploadedAt: Timestamp.fromDate(new Date()),
              });
               // Set the uploaded status to true.
              setIsUploaded(true);
            } catch (error) {
              // Handle errors during document creation.
              console.error('Error adding document: ', error);
            }
          });
        }
      );
    }
  }, [picSelected, storage, caption, db]);

  //Form submission and initiate the upload process.
  const handleUpload = (e) => {
    e.preventDefault();
    if (picSelected) {
       // Set the selected image for upload.
      setPicSelected(picSelected);
    } else {
      // Display an alert if no image is selected.
      alert('Please select an Image');
    }
  };


  return (
    <div className='flex gap-5 flex-column'>
      <form onSubmit={handleUpload} className='flex flex-row'>
        <div className='flex items-center'>
          <input
            placeholder='Select Picture'
            className='file-input file-input-bordered file-input-accent w-full max-w-xs text-stone-500 ml-10'
            type='file'
            onChange={(e) => setPicSelected(e.target.files[0])}
          />
        </div>
        <div className='flex items-center'>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder='Caption'
            className='textarea textarea-accent h-10 ml-10 text-stone-500'
          />
        </div>
        <div className='flex items-center'>
          <button
            type='submit'
            onClick={setUploadProgress}
            className='btn btn-accent text-neutral-focus ml-10'
          >
            Upload
          </button>
        </div>
      </form>
      
      {/* Display upload progress if greater than 0 */}
      {uploadProgress > 0 && (
        <div className='mb-5'>
          <p className='mb-2'>Uploading... {uploadProgress}%</p>
          <progress max='100' value={uploadProgress}></progress>
        </div>
      )}

      {/* Display the uploaded image and caption if not already acknowledged */}
      {downloadURL && !isUploaded && (
        <div className='mb-5'>
          <img src={downloadURL} alt='Uploaded Pic' className='mb-2' />
          <p className='mb-2'>{caption}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;