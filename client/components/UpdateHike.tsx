import { useState } from 'react'
import { HikesInterface } from '../../common/Hikes'
import { useAppDispatch } from '../hooks/redux'
import { thunkUpdateHike } from '../actions/hikes'

interface Props {
  hike: HikesInterface
  onClose: () => void
}

export default function EditHikeForm({ hike, onClose }: Props) {
  const [name, setName] = useState(hike.name)
  const [location, setLocation] = useState(hike.location)
  const dispatch = useAppDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const updatedHike: HikesInterface = { ...hike, name, location }
    dispatch(thunkUpdateHike(updatedHike))
    onClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Location:
        <textarea
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  )
}
