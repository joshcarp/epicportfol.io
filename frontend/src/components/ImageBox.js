import React from "react";
import './ImageBoxStyle.css'
import ImageGallery from 'react-image-gallery';
const images = [
    {
        original: 'https://picsum.photos/100/100',
        thumbnal: 'https://picsum.photos/100/100',
    },
    {
        original: 'https://picsum.photos/100/100',
        thumbnal: 'https://picsum.photos/100/100',
    },
    {
        original: 'https://picsum.photos/100/100',
        thumbnal: 'https://picsum.photos/100/100',
    },
]
export default function ImageBox(){
    return ( <ImageGallery items={images} />)
    };
            

