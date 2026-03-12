import React, { useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState(Array(6).fill(null));

  const handleClick = (index) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const newImages = [...images];
          newImages[index] = ev.target.result;
          setImages(newImages);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const newImages = [...images];
        newImages[index] = ev.target.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="top">
        <div className="title">
          Education is not<br />broken.
        </div>
        <div className="description">
          Its measurement system is <strong>outdated</strong>.
          Ateion replaces memory-based validation with{' '}
          <strong><em>capability-based intelligence</em></strong>.
        </div>
      </div>
      <div className="grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="box"
            onClick={() => handleClick(i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, i)}
          >
            {img && <img src={img} alt="gallery" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;