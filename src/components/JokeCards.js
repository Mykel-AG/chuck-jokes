import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function JokeCards() {
    const perPage = 6;

    const selectedJokes = useSelector((state) => state.allJokes.selected);
    const [currentCount, setCurrentCount] = useState(perPage);
    const [jokesDisplayed, setJokesDisplayed] = useState([]);
    const [showViewMore, setShowViewMore] = useState(true);

    const viewMorePagination = () => {
        const newCount = currentCount + perPage;
        setJokesDisplayed(selectedJokes.value.slice(0, newCount))
        setCurrentCount(newCount);
        if (newCount >= selectedJokes.value.length){
            setShowViewMore(false)
        }
    }

    useEffect(() => {
        setCurrentCount(perPage)
        setJokesDisplayed(selectedJokes.value.slice(0, perPage))
        if (perPage >= selectedJokes.value.length){
            setShowViewMore(false)
        }
        else {
            setShowViewMore(true)
        }

    }, [selectedJokes.value])

    const jokes = jokesDisplayed.map((ele, key) =>
        <div key={key} className='item'>
            <span className='title'><i className='green-light'></i> {selectedJokes.key !== "View All" ? selectedJokes.key.toUpperCase() : ele.categories[0] ? ele.categories[0].toUpperCase() : 'UNCATEGORIZED' } JOKE</span>
            <p>
                {ele.value.length <= 310 ? ele.value : ele.value.substring(0, 310) + ' ...'}
            </p>
            <span className="joke-stats-link"><a> SEE STATS <i className='arrow-forward ml-10 pr-10'></i></a> </span>
        </div>
    )

    const viewMore = showViewMore ? <div onClick={() => viewMorePagination()} className='box-brown-outline cl-2 view-more'>VIEW MORE <i className='arrow-down right pr-10'></i>
    </div> : '';

    return (
        <div className='container mb-50'>
            <div className='h-line'></div>
            <div className='active-joke-title'>{selectedJokes.key.toUpperCase()} JOKES</div>
            <div className='joke-cards'>
                {jokes}
            </div>
            <div className='flex-center'>
                {viewMore}
            </div>
        </div>
    )
}

export default JokeCards