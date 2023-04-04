import express from 'express'
import { HikesInterface } from '../../common/Hikes'
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
  const { name, location } = req.body
  const updateData = {
    id: Number(req.params.id),
    name: name,
    location: location,
  } as HikesInterface

  updateHike(updateData)
    .then((update) => {
      res.json(update)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteHike(id)
    .then((hike) => {
      res.json(hike)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
