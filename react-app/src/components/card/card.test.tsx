import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './card';

const mochData = {
        id: 1,
        title: 'Apple',
        description: 'Apple',
        price: 111,
        discountPercentage: 111,
        rating: 111,
        stock: 111,
        brand: 'Apple',
        category: 'Apple',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
    }

describe('Card', () => {
    it('renders Card by title', () => {
        render(
            <Card prodItem={mochData} />
        );
        expect(screen.getByRole('heading', {
            level: 5
        })).toHaveTextContent('Apple');
    });
    it('renders Card button', () => {
        render(
            <Card prodItem={mochData} />
        );
        expect(screen.findByRole('button', {
            name: '/details/i'
        })).toBeDefined();
        expect(screen.findByRole('button', {
            name: '/add/i'
        })).toBeDefined();
    });
});