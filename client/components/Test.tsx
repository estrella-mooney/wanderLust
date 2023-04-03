import { useState, useEffect } from 'react'
import { HikesInterface } from '../../common/Hikes'
import { getAllHikes } from '../apis/apiClient'
import { fetchHikes } from '../actions/hikes'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { Container, ThemeProvider } from '@mui/material'

export function Hikes() {
  const [hikes, setHikes] = useState(null as HikesInterface[] | null)
  const dispatch = useAppDispatch()
  const data = useAppSelector((globalState) => globalState.hikes)

  return (
    <>
      <Container maxWidth="sm">
        <div>
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
      </Container>
    </>
  )
}

export default Hikes
