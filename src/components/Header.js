import React from 'react'
import TopNav from './TopNav'

function Header() {
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


                    <div className="search">
                        <form>

                            <input placeholder='How can we make you laugh today?' name="search" type="text" />
                            <i className='search-icon'></i>
                        </form>
                    </div>


                </div>

            </div>

        </div>

    )
}

export default Header