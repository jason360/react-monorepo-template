import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyledSlider from './StyledSlider';

describe('<StyledSlider />', () => {
    test('renders StyledSlider correctly', () => {
        render(<StyledSlider size="small" />);
        expect(screen.getByRole('slider')).toMatchSnapshot();
    });
});