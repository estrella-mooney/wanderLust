import express from 'express'
import {
  getAllHikes,
  getIndivudualHike,
  createHike,
  updateHike,
  deleteHike,
} from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllHikes()
    .then((hikes) => {
      res.json(hikes)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newHike = req.body
  createHike(newHike)
    .then((newHike) => res.json(newHike))
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  getIndivudualHike(id)
    .then((hike) => {
      res.json(hike)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const { name, description, max_depth, duration, max_group, time } = req.body
  const updateData = {
    id: Number(req.params.id),
    name: name,
    description: description,
    max_depth: max_depth,
    duration: duration,
    max_group: max_group,
    time: time,
  } as DivesInterface

  updateDives(updateData)
    .then((update) => {
      res.json(update)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
