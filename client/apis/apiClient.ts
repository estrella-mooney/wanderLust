import request from 'superagent'
import { HikesInterface } from '../../common/Hikes'

export function getAllHikes(): Promise<HikesInterface[]> {
  return request.get('/api/v1/hikes').then((i) => i.body)
}

export function addNewHike(newHike: HikesInterface): Promise<HikesInterface> {
  return request
    .post('/api/v1/hikes')
    .send(newHike)
    .then((res) => {
      return res.body
    })
}

export function updateHikeApi(hike: HikesInterface) {
  return request
    .patch(`/api/v1/hikes/${hike.id}`)
    .send(hike)
    .then((res) => {
      return res.body
    })
}

export function deleteHikeApi(hikeId: number): Promise<number> {
  return request.del(`/api/v1/hikes/${hikeId}`).then((res) => res.body)
}

export function getIndivudualHikes(hikeId: number): Promise<HikesInterface[]> {
  return request.get(`/api/v1/hikes/${hikeId}`).then((res) => res.body)
} //Don't need this as we are using redux to store the local copy of our db
