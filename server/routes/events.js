import express from 'express'
import { getEventsByLocationId } from '../controllers/events.js'

const router = express.Router()

router.get('/:locationId/events', getEventsByLocationId)

export default router
