import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeSelected } from '../utils/JokesSlice';

function JokesTitleCards() {

    const dispatch = useDispatch();
    const colorArray = ['brown', 'orange', 'yellow', 'lemon', 'green', 'blue']
    const jokes = useSelector((state) => state.allJokes.value);
    const categories = Object.keys(jokes);
    const unsortedJokes = useSelector((state) => state.allJokes.unsortedValues);

    const titleClickHandler = (ele) => {
        let key = ele, value = {};
        if (key === "View All") {
            value = unsortedJokes['result'];
        }
        else {
            value = jokes[key];
        }
        dispatch(changeSelected({ key, value }))

    };

    const categoryBoxes = categories.map((ele, key) => <div onClick={() => titleClickHandler(ele)} key={key} className={`box-${colorArray[(key) % 6]} cl-2`}>{ele.toLocaleUpperCase()} JOKES</div>)
    return (
        <div className='cl-full'>
            {categoryBoxes}
            <div onClick={() => titleClickHandler("View All")} className='box-brown-outline cl-2'>View All<i className='arrow-down right pr-10'></i></div>
        </div>
    )
}

export default JokesTitleCards