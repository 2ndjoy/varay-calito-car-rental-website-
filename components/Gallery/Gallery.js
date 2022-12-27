import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
// import img from '../src/Home/img1.avif';
import "react-photo-view/dist/react-photo-view.css";

const Gallery = ({ img }) => {
  return (
    <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
  );
};

export default Gallery;
