import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import '../styles/Loading.css';

const Loading = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const onImageLoad = () => {
        setIsImageLoaded(true);
    }

    return (
        <div className='all'>
            <img
                src={require('../assets/header_background.png')}
                onLoad={onImageLoad}
                style={{ display: 'none' }}
                alt=""
            />
         
                <div className='loading'>
                    <h1>Chargement en cours... ⌛</h1>
                    <ReactLoading type='cylon' color='#F2A007' height={100} width={100} />
                </div>

            
        </div>
    )
}

export default Loading;
