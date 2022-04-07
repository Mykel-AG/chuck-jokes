import React from 'react'
import JokeCards from '../components/JokeCards'
import JokesTitleCards from '../components/JokesTitleCards'

function Home() {

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