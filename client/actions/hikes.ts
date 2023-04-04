import type { ThunkAction } from '../store'
import { HikesInterface } from '../../common/Hikes'

import {
  getAllHikes,
  addNewHike,
  updateHikeApi,
  deleteHikeApi,
  getIndivudualHikes,
} from '../apis/apiClient'

export const SAVE_HIKES = 'SAVE_HIKES'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_HIKES = 'ADD_HIKES'

export type Action =
  | { type: 'SAVE_HIKES'; payload: HikesInterface[] }
  | { type: 'DEL_HIKE'; payload: number }
  | { type: 'UPDATE_HIKE'; payload: HikesInterface }
  | { type: 'ADD_HIKE'; payload: HikesInterface }
  | { type: 'SHOW_ERROR'; payload: string }

// export function requestHikes(): Action {
//   return {
//     type: REQUEST_HIKES,
//     payload: null,
//   }
// }

export function saveHikes(hikes: HikesInterface[]): Action {
  return {
    type: SAVE_HIKES,
    payload: hikes,
  }
}

export function updateHike(newDive: HikesInterface): Action {
  return {
    type: 'UPDATE_HIKE',
    payload: newDive,
  }
}

export function addHike(addDive: HikesInterface): Action {
  return {
    type: 'ADD_HIKE',
    payload: addDive,
  }
}

export function deleteHike(id_to_del: number): Action {
  return {
    type: 'DEL_HIKE',
    payload: id_to_del,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: 'SHOW_ERROR',
    payload: errorMessage,
  }
}

export function fetchHikes(): ThunkAction {
  return (dispatch) => {
    return getAllHikes()
      .then((hikes) => {
        console.log(hikes, 'Testing yayaaa')
        dispatch(saveHikes(hikes))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
