import { Component, createRef, RefObject } from 'react';
import { ISearch } from '../../types/type';
import searchIcon from '../../assets/search.png';

import './input.scss';

interface IProps {}
interface IState {
    search: ISearch;
    shouldShowElem?: boolean;
}

class Input extends Component<IProps, IState> {

    constructor(props: IState) {
        super(props);
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
            search: {
                searchValue: localStorage.getItem('search') || ''
            }
        })
    }

    componentWillUnmount(): void {
        localStorage.setItem('search', this.state.search.searchValue)
    }

    handleClick = () => {
        this.setState({
            shouldShowElem: true,
        })
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ 
            search: {
                searchValue: e.target.value
            }
         });
    }

    handleClear = () => {
        this.setState({
            search: {
                searchValue: ''
            },
            shouldShowElem: false,
        })
    }

    render() {
        const { shouldShowElem, search } = this.state;
        return (
            <>
            <div className='search'>
                <input 
                    onChange={this.handleChange} 
                    type="text" 
                    placeholder='Enter your text'
                />
                {shouldShowElem ? (<button className='search__clear' onClick={this.handleClear}>X</button>) : (
                    <div className='search__img' onClick={this.handleClick}>
                        <img src={searchIcon} alt="search" />
                    </div>
                )}
            </div>
            {shouldShowElem ? <div className='search__message'>You are entered - {search.searchValue} </div> : null}
            </>
        )
    }
}

export default Input;