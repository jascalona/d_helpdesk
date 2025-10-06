import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

function InputDesable() {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
        >
            <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
        </Box>
    );
}
export default InputDesable;