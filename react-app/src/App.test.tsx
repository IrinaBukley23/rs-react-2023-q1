import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
    it('renders hello RsSchool', () => {
        // ARRANGE
        render(<App />);
        // ACT
        // EXPECT
        expect(screen.getByRole('heading', {
            level: 1
        })).toHaveTextContent('Hello RsSchool');
    });
});

