import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import StyledButton from './StyledButton';

describe('<StyledButton />', () => {
    test('renders StyledButton correctly', () => {
        render(
            <StyledEngineProvider injectFirst>
                <StyledButton color="primary">Primary</StyledButton>
            </StyledEngineProvider>
        );
        expect(screen.getByRole('button')).toMatchSnapshot();
    });
});