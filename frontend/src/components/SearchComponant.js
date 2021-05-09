import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { searchList } from '../actions/productAction';


export default function SearchComponant(props) {
    const [keyWord, setKeyWord] = useState('');
    const dispatch = useDispatch();
    
    const onSubmit = () => {
        dispatch(searchList(keyWord));
    }

    return (
        <div>
            <div className='Search-box'>
                    <input 
                        type='text' 
                        placeholder='Search'
                        value={keyWord}
                        name='search'
                        onChange={(e) => setKeyWord(e.target.value)}
                        ></input>
                    <button type='submit' onClick={onSubmit}><FaSearch></FaSearch></button>
            </div>
        </div>
    )
}
