import { useState, useEffect } from 'react'
import { HikesInterface } from '../../common/Hikes'
import { getAllHikes, deleteHikeApi } from '../apis/apiClient' //import the deleteHikeApi function
import { fetchHikes, deleteHike } from '../actions/hikes'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Container, ThemeProvider } from '@mui/material'
import { Link } from 'react-router-dom'
import { thunkDelHike } from '../actions/hikes'

import AddHikeForm from './AddHikeForm'

export function Hikes() {
  const [hikes, setHikes] = useState(null as HikesInterface[] | null)
  const [showHikes, setShowHikes] = useState(false)

  const dispatch = useAppDispatch()
  const data = useAppSelector((globalState) => globalState.hikes)

  useEffect(() => {
    // dispatch(
    //   fetchHikes()
    // )
    getAllHikes()
      .then((hikesArr) => {
        setHikes(hikesArr)
      })
      .catch((err) => console.log(err.message))
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
          {showHikes &&
            data &&
            data?.map((hike) => {
              return (
                <div key={hike.id} className="hike-section">
                  <p>{hike.name}</p>
                  <p>{hike.location}</p>
                  <button onClick={() => handleDelete(hike.id)}>
                    Delete Hike
                  </button>{' '}
                  {/* add a delete button that calls handleDelete function */}
                </div>
              )
            })}
        </div>
        <AddHikeForm />
        {/* <Link to='/hikes/add'>Add Hike</Link> */}
      </Container>
    </>
  )
}

export default Hikes
