import { useState, useEffect } from 'react'
import { HikesInterface } from '../../common/Hikes'
import { getAllHikes } from '../apis/apiClient'
import { fetchHikes, thunkDelHike, thunkUpdateHike } from '../actions/hikes'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Container, ThemeProvider } from '@mui/material'
import { Link } from 'react-router-dom'

import AddHikeForm from './AddHikeForm'

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
      <Container maxWidth="sm">
        <div className="movie">
          <img className="small-img" src="./images/3-min.png" alt="Header" />
          <button className="button" onClick={button}>
            {showHikes ? 'Hide Hikes' : 'Show Hikes'}
          </button>
          {/* Button (onClick) dispatch*/}
          {/* Get info from stroe, load on page */}
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
          {/* <Container /> */}
        </div>
        <AddHikeForm />
        {/* <Link to="/hikes/add">Add Hike</Link> */}
      </Container>
    </>
  )
}

export default Hikes
