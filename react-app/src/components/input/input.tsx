import { Component, createRef, RefObject } from 'react';
import { ISearch } from '../../types/type';
import searchIcon from '../../assets/search.png';

import './input.scss';

interface IProps {
    search: ISearch;
    shouldShowElem?: boolean;
}

class Input extends Component<IProps> {
    refSearch: RefObject<HTMLInputElement>;
    state: IProps;

    constructor(props: IProps) {
        super(props);
        this.refSearch = createRef();
        this.state = {
            search: {
                searchValue: ''
            },
            shouldShowElem: false,
        }
    }

    componentDidMount(): void {
        this.setState({
            shouldShowElem: false,
        })
        this.getSearch();
    }

    componentWillUnmount(): void {
        if(this.refSearch.current?.value) {
            localStorage.setItem('search', this.refSearch.current?.value)
        }
    }

    getSearch = () => {
        if(localStorage.getItem('search')) {
            this.setState({
                search: localStorage.getItem('search')
            })
        }
    }

    handleClick = () => {
        this.setState({
            search: this.refSearch.current?.value,
            shouldShowElem: true,
        })
    }

    handleClear = () => {
        if(this.refSearch.current?.value) this.refSearch.current.value = '';
        this.setState({
            search: '',
            shouldShowElem: false,
        })
    }

    render() {
        const { shouldShowElem } = this.state;
        return (
            <>
            <div className='search'>
                <input ref={this.refSearch} type="text" placeholder='Enter your text' />
                {shouldShowElem ? (<button className='search__clear' onClick={this.handleClear}>X</button>) : (
                    <div className='search__img' onClick={this.handleClick}>
                        <img src={searchIcon} alt="search" />
                    </div>
                )}
            </div>
            {shouldShowElem ? <div className='search__message'>You are entered - {this.refSearch.current?.value} </div> : null}
            </>
        )
    }
}

export default Input;