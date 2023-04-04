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
export const ADD_HIKE = 'ADD_HIKE'
export const DEL_HIKE = 'DEL_HIKE'
export const UPDATE_HIKE = 'UPDATE_HIKE'

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

export function updateHike(newHike: HikesInterface): Action {
  return {
    type: UPDATE_HIKE,
    payload: newHike,
  }
}

export function addHike(addHike: HikesInterface): Action {
  return {
    type: ADD_HIKE,
    payload: addHike,
  }
}

export function deleteHike(id_to_del: number): Action {
  return {
    type: DEL_HIKE,
    payload: id_to_del,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
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
        console.log('fetchHike Thunk', err.message)
      })
  }
}

export function thunkAddHike(hike: HikesInterface): ThunkAction {
  return (dispatch) => {
    return addNewHike(hike)
      .then((hike) => {
        dispatch(addHike(hike))
      })
      .catch((err) => {
        console.log('Thunk add hike', err.message)
      })
  }
}

export function thunkDelHike(hike_id: number): ThunkAction {
  return (dispatch) => {
    return deleteHikeApi(hike_id)
      .then(() => {
        dispatch(deleteHike(hike_id))
      })
      .catch((err) => {
        console.log('Thunk Delete Hike', err.message)
      })
  }
}

export function thunkUpdateDive(hike: HikesInterface): ThunkAction {
  return (dispatch) => {
    return updateHikeApi(hike)
      .then((hike) => {
        dispatch(updateHike(hike))
      })
      .catch((err) => {
        console.log('Thunk Update Hike', err.message)
      })
  }
}
