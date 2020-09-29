import React from "react";
import './ImageBoxStyle.css'
import ImageGallery from 'react-image-gallery';

export default function ImageBox(props) {
    const images = [];
    for (let image of props.profile.images) {
        images.push(
            {original: image.src}
        )
    }
    return (
        <ImageGallery
            items={images}
            showBullets={true}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
        />
    )
};



