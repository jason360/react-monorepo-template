import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import {StyledButton} from '../../packages/lib-b/src';

export default {
    title: "StyledButton",
    component: StyledButton
};

export const Primary = () => {
    return (
        <StyledEngineProvider injectFirst>
            <StyledButton color="primary">Primary</StyledButton>
        </StyledEngineProvider>
    );
};

export const Secondary = () => {
    return (
        <StyledEngineProvider injectFirst>
            <StyledButton color="secondary">Secondary</StyledButton>
        </StyledEngineProvider>
    );
};


