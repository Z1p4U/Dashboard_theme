// import React from 'react';

// class ImagePreview extends React.Component {
//   preview = (e) => {
//     const input = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       const result = reader.result;
//       const img = document.getElementById("img");
//       img.src = result;
//     };
//     reader.readAsDataURL(input);
//   };

//   render() {
//     return (
//       <div>
//         <input type="file" onChange={this.preview} />
//         <img  id="img" src="img/user.png"  />
//       </div>
//     );
//   }
// }

// export default ImagePreview;

import React from "react";

const ImagePreview = ({ selectedFile }) => {
  if (!selectedFile) {
    return null; // If no file is selected, don't render anything
  }

  const reader = new FileReader();

  const handleImageLoad = (event) => {
    const result = reader.result;
    
    const img = document.getElementById("img");
    img.src = result;
  };

  reader.onload = handleImageLoad;
 reader.readAsDataURL(selectedFile);
 

  return <img id="img"  alt="Preview" />;
};

export default ImagePreview;
