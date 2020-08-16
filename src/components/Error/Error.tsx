import React from 'react';
import { Box } from '../../styles/styles';

const Error: React.FC<Props> = () => {
    return (
        <Box>
            <p
                style={{
                    color: 'white',
                    textAlign: 'center',
                    margin: '20px auto',
                    fontWeight: 700,
                    fontSize: '17px'
                }}
            >
                It seems that you are offline :( Please, check your internet connection and refresh the page.
            </p>
        </Box>
    )
}

export default Error
