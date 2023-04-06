import { useState, useEffect } from 'react'
import { HikesInterface } from '../../common/Hikes'
import { getAllHikes } from '../apis/apiClient'
import { fetchHikes } from '../actions/hikes'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Container, ThemeProvider } from '@mui/material'
import { Link } from 'react-router-dom'

import AddHikeForm from './AddHikeForm'

export function TestHikes() {
  const [hikes, setHikes] = useState(null as HikesInterface[] | null)
  const dispatch = useAppDispatch()
  const data = useAppSelector((globalState) => globalState.hikes)

  useEffect(() => {}, [])

  const button = () => {
    dispatch(fetchHikes())
  }

  return (
    <>
      <Container maxWidth="sm">
        <div className="centre-flex">
          <img className="small-img" src="./images/3-min.png" alt="Header" />
          <button className="button" onClick={button}>
            Show Hikes
          </button>
          {/* Button (onClick) dispatch*/}
          {/* Get info from stroe, load on page */}
          {data &&
            data?.map((hike) => {
              return (
                <div key={hike.id}>
                  <p>{hike.name}</p>
                  <p>{hike.location}</p>
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

export default TestHikes
