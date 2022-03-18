import React from 'react'

function JokeItem() {
    return (
        <div className='container mb-50'>
            <div className='nav-background'><i className='arrow-head-back'></i></div>
            <div className='cl-container'>
            <div className='cl-9 mt-50'>
                <div className='jokes-details-card'>
                    <div className='head'>
                        <span className='jokes-category'>SOCIAL JOKES</span>
                        <span className='trending'>TRENDING</span>
                    </div>
                    <div className='title-row'>
                        <div className='title-text'>The Granny Joke </div>
                        <div className='title-meta'>
                            <span className='divider'></span>
                            <span className='title-no'>No #1</span>
                        </div>

                    </div>
                    <p>
                        he href attribute is required for an anchor to be
                        keyboard accessible. Provide a valid, navigable address
                        as the href value. If you cannot provide an href,
                        he href attribute is required for an anchor to be
                        keyboard accessible. Provide a valid, navigable address
                        as the href value. If you cannot provide an href,
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