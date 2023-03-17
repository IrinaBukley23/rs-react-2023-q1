import { Component } from 'react';
import search from '../../assets/search.png';

import './input.scss';

class Input extends Component {
    render() {
        return (
            <div className='search'>
                <input type="text" placeholder='Enter your text' />
                <div className='search__img'>
                    <img src={search} alt="search" />
                </div>
            </div>
            
        )
    }
}

export default Input;