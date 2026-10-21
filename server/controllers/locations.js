
import { pool } from '../config/database.js'

// Get all locations
export const getAllLocations = async (req, res) => {
    try {
        const results = await pool.query(
            'SELECT * FROM locations ORDER BY id'
        )

        res.status(200).json(results.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Get one location by ID
export const getLocationById = async (req, res) => {
    try {
        const { locationId } = req.params

        const results = await pool.query(
            'SELECT * FROM locations WHERE id = $1',
            [locationId]
        )

        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Location not found' })
        }

        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
