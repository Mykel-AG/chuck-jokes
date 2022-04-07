import './App.css';
import './assets/styles/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import JokeDetails from './pages/JokeDetails';
import Home from './pages/Home';
import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllJokes } from './services/JokeServices';
import { sortJokes } from './utils/SortJokes';
import { storeUnsorted, store, changeSelected, storeSingle } from './utils/JokesSlice';
import { useLocalState } from './utils/LocalState';



function App() {
  const [savedJokes, setSavedJokes] = useLocalState("", "jokes");
  const jokes = useSelector((state) => state.allJokes.value);
  const dispatch = useDispatch();

  const dispatchData = useCallback(async (res) => {
    dispatch(storeUnsorted(res));
    const sortedJokes = sortJokes(res.result);
    dispatch(store(sortedJokes));
    const [key, value] = Object.entries(sortedJokes)[0];
    dispatch(changeSelected({ key, value }))
  }, [dispatch])


  const jokeRequest = useCallback(async () => {
    const res = await getAllJokes();
    setSavedJokes(res)
    dispatchData(res)

  }, [dispatchData, setSavedJokes])




  useEffect(() => {
    if (Object.keys(jokes).length === 0) {
      if (savedJokes !== "") {
        dispatchData(savedJokes)
      }
      else {
        jokeRequest()
          .catch(error => console.log(error));
      }

    }

  }, []);

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/joke' element={< JokeDetails />} onLeave={() => dispatch(storeSingle({}))}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
