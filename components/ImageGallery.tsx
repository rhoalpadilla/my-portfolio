import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState<File[]>([]);

  // Load images from localStorage when the component mounts
  useEffect(() => {
    const storedImages = localStorage.getItem('images');
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);

  // Save images to localStorage whenever the images state changes
  useEffect(() => {
    if (images.length > 0) {
      localStorage.setItem('images', JSON.stringify(images));
    }
  }, [images]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setImages((prevImages) => [...prevImages, ...acceptedFiles]);
    },
  });

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="my-10">
      <div {...getRootProps()} className="border-2 border-dashed p-5 rounded-md text-center">
        <input {...getInputProps()} />
        <p>Drag and drop images here, or click to select files</p>
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="border p-2">
            <img
              src={URL.createObjectURL(image)}
              alt={image.name}
              className="w-full h-48 object-cover"
            />
            <p className="text-center mt-2">{image.name}</p>
            <button
              onClick={() => handleRemoveImage(index)}
              className="mt-2 bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
