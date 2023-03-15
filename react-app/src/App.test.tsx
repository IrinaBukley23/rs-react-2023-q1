import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App, WrappedApp } from './App';

describe('App', () => {
    it('renders hello RsSchool', () => {
        // ARRANGE
        render(<WrappedApp />);
        // ACT
        // EXPECT
        expect(screen.getByRole('heading', {
            level: 2
        })).toHaveTextContent('Home page');
    });
    it('Renders not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/this-route-does-not-found']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByRole('heading', {
            level: 2
        })).toHaveTextContent('Page not found');
    });
});

