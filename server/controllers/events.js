
import { pool } from '../config/database.js'

// Get all events for a specific location
export const getEventsByLocationId = async (req, res) => {
    try {
        const { locationId } = req.params

        const results = await pool.query(
            `SELECT * FROM events
       WHERE location_id = $1
       ORDER BY starts_at ASC`,
            [locationId]
        )

        res.status(200).json(results.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
