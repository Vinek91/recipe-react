import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import background from '../assets/header_background.png';
import '../styles/Loading.css'

const Loading = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = background; // Chemin de votre image de fond
    }, []);

    return (
        <div className='all'>
        <div className='loading'>
            {imageLoaded ? (
                <><h1>Chargement en cours... ⌛</h1>
                <ReactLoading type='cylon' color='#F2A007' height={100} width={100} /></>
            ) : (
                // Affichez un indicateur de chargement alternatif ici
                <><h1>Chargement en cours... ⌛</h1>
                <ReactLoading type='cylon' color='#F2A007' height={100} width={100} /></>
            )}
        </div>
        </div>
    )
}

export default Loading;
