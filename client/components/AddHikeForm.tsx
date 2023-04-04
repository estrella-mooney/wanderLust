import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { addHike, thunkAddHike } from '../actions/hikes'
import { HikesInterface } from '../../common/Hikes'
import { useNavigate } from 'react-router-dom'

function AddHikeForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [userHike, setUserHike] = useState({} as HikesInterface)

  const handleDiveChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserHike({ ...userHike, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(addHike(userHike))
    navigate('/hikes')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Your Own Hike</h1>
      <br></br>
      <label htmlFor="name">Name Of Hike: </label>
      <input
        name="name"
        id="name"
        type="text"
        value={userHike.name || ''}
        onChange={handleDiveChange}
        required
      />
      <br></br>

      <label htmlFor="location">Location: </label>
      <input
        name="location"
        id="location"
        type="text"
        value={userHike.location || ''}
        onChange={handleDiveChange}
        required
      />
      <br></br>
      <button className="hikes_button" type="submit">
        Sumbit your hike
      </button>
    </form>
  )
}

export default AddHikeForm