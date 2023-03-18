import Input from '../input/input';
import { Component, RefObject, createRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import './header.scss';
import { ISearch } from 'types/type';

interface IProps {
    search: ISearch;
}

class Header extends Component<IProps> {
    render() {
        const { search } = this.props;
        return (
            <header className='header'>
                <div className='header__logo'>
                    <img src={logo} alt="logo" />
                </div>
                <nav className='header__menu'>
                    <ul className='header__menu-list'>
                        <li className='header__menu-list_item'>
                           <Link to="/home">Home</Link> 
                        </li>
                        <li className='header__menu-list_item'>
                            <Link to="/about">About Us</Link> 
                        </li>
                    </ul>
                </nav>
                <div className='header__search'>
                    <Input search={search} />
                </div>
            </header>
        )
    }
}

export default Header;