import React from 'react';
import loadingImage from '../../images/loader.gif'

const Loading = () => {
    return (
        <img 
            src={loadingImage} 
            alt="Loading"
            style={{
                width: '150px',
                margin: '30px auto',
            }}
        />
    )
}

export default Loading
