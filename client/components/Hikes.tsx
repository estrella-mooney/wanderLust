import { useState, useEffect } from 'react'
import { HikesInterface } from '../../common/Hikes'
import { getAllHikes } from '../apis/apiClient'
import { fetchHikes, thunkDelHike, thunkUpdateHike } from '../actions/hikes'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Container, ThemeProvider } from '@mui/material'
import { Link } from 'react-router-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// import '@react-spring/parallax/dist/styles.css'

import AddHikeForm from './AddHikeForm'
import { ClassNames } from '@emotion/react'

export function Hikes() {
  const [hikes, setHikes] = useState(null as HikesInterface[] | null)
  const [showHikes, setShowHikes] = useState(false)

  const dispatch = useAppDispatch()
  const data = useAppSelector((globalState) => globalState.hikes)

  useEffect(() => {
    // Make a varible for being able to use the useAppSelector from the store
    // dispatch(
    //   fetchHikes()
    //   // Make button
    // )
    //   getAllHikes() //Set local State
    //     .then((hikesArr) => {
    //       setHikes(hikesArr)
    //     })
    //     .catch((err) => console.log(err.message))
  }, [])

  const button = () => {
    setShowHikes(!showHikes)
    if (!showHikes) {
      dispatch(fetchHikes())
    }
  }
  const handleDelete = (id: number) => {
    dispatch(thunkDelHike(id)) //dispatch the thunkDelHike function with the hike id to delete the hike
  }

  return (
    <>
      <div className="hikes-component">
        {/* <Container maxWidth="sm"> */}
        {/* <div className="movie"> */}
        <div className="hero">
          <img className="hero-img" src="./images/mountain.jpg" alt="Header" />
        </div>
        <div className="">
          <button className="button" onClick={button}>
            {showHikes ? 'Hide Hikes' : 'Show Hikes'}
          </button>
          {showHikes &&
            data &&
            data?.map((hike) => {
              return (
                <div key={hike.id} className="hike-section">
                  <p>{hike.name}</p>
                  <p>{hike.location}</p>
                  <button
                    className="button"
                    onClick={() => handleDelete(hike.id)}
                  >
                    Delete Hike
                  </button>{' '}
                </div>
              )
            })}
        </div>
        {/* <Container /> */}
        {/* </div> */}
        <AddHikeForm />
        {/* </Container> */}
      </div>
    </>
  )
}

export default Hikes
