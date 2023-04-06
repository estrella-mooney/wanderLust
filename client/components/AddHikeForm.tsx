import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { addHike, thunkAddHike } from '../actions/hikes'
import { HikesInterface } from '../../common/Hikes'
import { useNavigate } from 'react-router-dom'

function AddHikeForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [userHike, setUserHike] = useState({} as HikesInterface)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserHike({ ...userHike, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(thunkAddHike(userHike))
    // setUserHike({ name: '', location: '' } as HikesInterface)
  }

  //This will store what user added in the redux store.

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault()
  //   dispatch(addHike(userHike))
  //   navigate('/')
  // }

  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Add Your Own Hike</h1>
          <br></br>
          <label htmlFor="name">Name Of Hike: </label>
          <input
            name="name"
            id="name"
            type="text"
            value={userHike.name || ''}
            onChange={handleChange}
            required
          />
          <br></br>

          <label htmlFor="location">Location: </label>
          <input
            name="location"
            id="location"
            type="text"
            value={userHike.location || ''}
            onChange={handleChange}
            required
          />
          <br></br>
          <button className="hikes_button" type="submit">
            Sumbit your hike
          </button>
        </form>
      </div>
    </>
  )
}

export default AddHikeForm
