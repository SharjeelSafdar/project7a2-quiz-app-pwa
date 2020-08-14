import React from 'react';
import { Box, Button } from '../../styles/styles';

interface Props {
    setAppState: React.Dispatch<React.SetStateAction<number>>;
}

const Error: React.FC<Props> = ({ setAppState }) => {
    return (
        <Box>
            <h3
                style={{
                    color: 'white',
                    textAlign: 'center',
                    margin: '20px auto',
                }}
            >
                It seems that you are offline :( Please, check your internet connection and try again.
            </h3>
            <Button onClick={() => setAppState( previous => {
                // Toggle appState value between 0 and 4.
                if (previous === 0)
                    return 4;
                else
                    return 0;
            })}>
                Back to Home Page
            </Button>
        </Box>
    )
}

export default Error
