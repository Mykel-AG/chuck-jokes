import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import TopNav from './TopNav'
import { searchJokes } from '../services/JokeServices';
import { limitJokes } from '../utils/SortJokes';
import { storeSingle } from '../utils/JokesSlice';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const [activeSearch, setActiveSearch] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const jokeRequest = useCallback(async () => {
        let res = await searchJokes(searchInput);
        res = limitJokes(res.result, 4);
        if (res.length === 1) {
            resetSearch()
            dispatch(storeSingle(res[0]));
            navigate('/joke');
            return;
        }

        setSearchResults(res);
        setShowResults(true)
        
    }, [dispatch, searchInput, navigate])

    useEffect(()=>{
        if (searchInput === ""){
            resetSearch()
        }
    }, [searchInput])

    const resetSearch = ()=> {
        setSearchResults([])
        setShowResults(false)
    }


    const searchJoke = () => {
        jokeRequest()
            .catch(error => console.log(error));
    }
    const lightColors = ['green', 'orange', 'blue', 'red'];
    const resultDisplay = searchResults.map((ele, index)=><div key={index}>
        <span><i className={`${lightColors[index]}-light`}></i>
        {ele.categories && ele.categories.length > 0 ? ele.categories[0] : 'Uncategorized'}
         &nbsp; Jokes: {ele.value.substring(0, 18)} ...</span></div>
         )

    return (
        <div>
            <TopNav />
            <div className="header">
                <div className='header-content'>
                    <div className='header-title'>
                        The Joke Bible
                    </div>
                    <div className='header-caption'>
                        Daily laughs for you and yours
                    </div>
                    <div className={`search ${activeSearch ? 'active-search' : ''}`}>
                            <input onFocus={() => setActiveSearch(true)} onBlur={() => setActiveSearch(false)}
                             onChange={(e) => setSearchInput(e.target.value)} placeholder='How can we make you laugh today?'
                              name="search" type="text" />
                            <i onClick={() => searchJoke()} className={`${activeSearch ? 'search-icon-dark' : 'search-icon'}`}></i>
                     
                        <div className={`${showResults ? '' : 'hide'}`}>
                            <div className='pointer-right'></div>
                            <div className='result-box'>
                                <div className='results'>
                                    {resultDisplay}
                                </div>

                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </div>

    )
}

export default Header