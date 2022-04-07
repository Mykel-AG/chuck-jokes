import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function JokeItem() {
    const navigate = useNavigate();
    const joke = useSelector((state) => state.allJokes.singleJoke);
    const category = joke.categories && joke.categories.length > 0 ? joke.categories[0] : 'UNCATEGORIZED';
    const details = joke.value ? joke.value : '';
    useEffect(()=> {
        if (Object.keys(joke).length === 0){
            navigate('/');
        }
    }, [])
    
    return (
        <div className='container mb-50'>
            <div className='nav-background'><i className='arrow-head-back'></i></div>
            <div className='cl-container'>
            <div className='cl-9 mt-50'>
                <div className='jokes-details-card'>
                    <div className='head'>
                        <span className='jokes-category'>{category.toUpperCase()} JOKES</span>
                        <span className='trending'>TRENDING</span>
                    </div>
                    <div className='title-row'>
                        <div className='title-text'>{category !== '' ? category.charAt(0).toUpperCase() + category.slice(1) : 'Uncategotized'} Joke </div>
                        <div className='title-meta'>
                            <span className='divider'></span>
                            <span className='title-no'>No #1</span>
                        </div>

                    </div>
                    <p>
                        {details}
                    </p>

                </div>

                <div className='joke-details-footer'>
                    <div className='reaction'>
                        <div className='likes'>
                            <span className='icon-success-rounded'><i className='icon-like'></i></span><br />
                            <span className='success-text'>328</span>
                        </div>
                        <div className='dislikes'>
                            <span className='icon-danger-rounded'><i className='icon-dislike'></i></span><br />
                            <span className='danger-text'>98</span>
                        </div>
                    </div>
                    <div className='joke-nav'>
                        <button className='anim-backward'><i className='arrow-head-back'></i> PREV. JOKE</button>
                        <button className='anim-forward'>NEXT JOKE <i className='arrow-head-forward'></i></button>
                    </div>
                </div>

            </div>
            <div className='cl-3 mt-50 top-jokes'>
                <span className='title'>THE TOP 10 JOKES THIS WEEK</span>
                <p>
                    <li>Smoking Joke</li>
                    <li>Smoking Joke</li>
                    <li>Smoking Joke</li>
                    <li>Smoking Joke</li>
                    <li>Smoking Joke</li>
                    <li>Smoking Joke</li>
                    <li>Smoking Joke</li>
                    <li>Smoking Joke</li>
                    <li>Smoking Joke</li>
                    <li>Smoking Joke</li>
                </p>
            </div>
            </div>

        </div>
    )
}

export default JokeItem