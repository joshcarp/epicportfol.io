import React from "react";
import './ImageBoxStyle.css'
import ImageGallery from 'react-image-gallery';
const images = [
    {
        original: 'https://picsum.photos/id/1/1200/800',
        thumbnal: 'https://picsum.photos/id/1/100',
    },
    {
        original: 'https://picsum.photos/id/2/1200/800',
        thumbnal: 'https://picsum.photos/id/2/100',
    },
    {
        original: 'https://picsum.photos/id/3/1200/800',
        thumbnal: 'https://picsum.photos/id/3/100',
    },
]

export default function ImageBox() {
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


