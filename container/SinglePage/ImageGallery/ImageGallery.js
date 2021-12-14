import React from 'react';
import ImageGallery from 'react-image-gallery';
import ImageGalleryWrapper from './ImageGallery.style';

const PostImageGallery = ({ images }) => {
  const processImages = images.map((image)=> {
    return {
      original: image.img,
      thumbnail: image.thumb
    }
  });

  return (
    <ImageGalleryWrapper>
      <ImageGallery
        items={processImages}
        showPlayButton={false}
        showFullscreenButton={false}
        showIndex={true}
        lazyLoad={true}
        slideDuration={550}
      />
    </ImageGalleryWrapper>
  );
};

export default PostImageGallery;
