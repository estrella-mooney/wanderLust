import {
  Action,
  ADD_HIKE,
  SAVE_HIKES,
  UPDATE_HIKE,
  DEL_HIKE,
} from '../actions/hikes'
import { HikesInterface } from '../../common/Hikes'

const initialState: HikesInterface[] = []

function subhikes(state = initialState, action: Action): HikesInterface[] {
  const { type, payload } = action

  switch (type) {
    case SAVE_HIKES:
      return payload
    case UPDATE_HIKE:
      return state.map((hike) => (hike.id === payload.id ? payload : hike))
    case ADD_HIKE:
      console.log(payload)
      return [...state, payload]
    case DEL_HIKE:
      return state.filter((hike) => hike.id !== payload)

    default:
      return state
  }
}

export default subhikes
