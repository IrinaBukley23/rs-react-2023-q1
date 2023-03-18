import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './input';

const mochData = {
    searchValue: 'some text'
}
const setup = () => {
    const utils = render(<Input search={mochData} />)
    const input: HTMLInputElement = screen.getByPlaceholderText('Enter your text');
    return {
        input,
        ...utils,
    }
}


describe('Input', () => {
    it('renders input', () => {
        const {input} = setup();
        fireEvent.change(input, {target: {value: '23'}})
        expect(input.value).toBe('23')
    });
});

const SEARCH_KEY = 'search';

describe('Save to localStorage', () => {
    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem')

    afterEach(() => {
        localStorage.clear()
    })
    describe('get search', () => {
        it('get data from localStorage', () => {
            const value = 'someText'
            localStorage.setItem(SEARCH_KEY, value);

            expect(getItemSpy).toHaveBeenCalledWith(SEARCH_KEY)
        })
    })
})