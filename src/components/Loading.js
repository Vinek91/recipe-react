import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import background from '../assets/header_background.png';
import '../styles/Loading.css';

const Loading = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = background;
        img.onload = () => {
            setIsImageLoaded(true);
        }
    }, []);

    return (
        <div className='all'>
            {isImageLoaded ? (
                <div className='loading'>
                    <h1>Chargement en cours... ⌛</h1>
                    <ReactLoading type='cylon' color='#F2A007' height={100} width={100} />
                </div>
            ) : (
                <div className='loading'>
                    <h1>Loading...</h1>
                </div>
            )}
        </div>
    )
}

export default Loading;
