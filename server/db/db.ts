import connection from './connection'
import { HikesInterface } from '../../common/Hikes'

export function getAllHikes(db = connection): Promise<HikesInterface[]> {
  return db('hikes').select('*')
}

export function getIndivudualHike(
  id: number,
  db = connection
): Promise<number> {
  return db('hikes').select().first().where('hikes.id', id)
}

export function createHike(
  newHikes: HikesInterface,
  db = connection
): Promise<HikesInterface> {
  return db('hikes')
    .insert({
      name: newHikes.name,
      location: newHikes.location,
    })
    .returning(['id', 'name', 'location'])
    .then((data) => data[0])
}

export function updateHike(
  updateHike: HikesInterface,
  db = connection
): Promise<HikesInterface[]> {
  return db('hikes')
    .select()
    .where('hikes.id', updateHike.id)
    .first()
    .update({
      name: updateHike.name,
      location: updateHike.location,
    })
    .returning(['id', 'name', 'location'])
}

export function deleteHike(id: number, db = connection): Promise<number> {
  return db('hikes')
    .where('id', id)
    .del()
    .then(() => {
      return db('hikes').delete().where('id', id)
    })
}
