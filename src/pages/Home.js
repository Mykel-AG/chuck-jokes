import React, { useEffect, useState } from 'react'
import JokeCards from '../components/JokeCards'
import JokesTitleCards from '../components/JokesTitleCards'
import { getAllJokes } from '../services/JokeServices';

function Home() {
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    const [allJokes, setAllJokes] = useState([]);

    const jokeRequest = (e) => {
        getAllJokes()
            .then(response => {
                setAllJokes(response.data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        jokeRequest();

        console.log(allJokes)
    }, [allJokes])

    return (
        <div>
            <section className='page-body'>
                <JokesTitleCards />
                <JokeCards />
            </section>
        </div>
    )
}

export default Home