import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getLocationById } from '../services/LocationsAPI'
import { getEventsByLocationId } from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = () => {
    const { locationId } = useParams()

    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError('')

            try {
                const [locationData, eventsData] = await Promise.all([
                    getLocationById(locationId),
                    getEventsByLocationId(locationId)
                ])

                setLocation(locationData)
                setEvents(eventsData)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [locationId])

    if (loading) return <p>Loading location...</p>
    if (error) return <p role="alert">Error: {error}</p>

    return (
        <div className="location-events">
            <header>
                <div className="location-image">
                    <span style={{ fontSize: '4rem' }}>{location.emoji}</span>
                </div>

                <div className="location-info">
                    <h2>{location.name}</h2>
                    <p>{location.description}</p>
                </div>
            </header>

            <section className="events-list">
                <h2>Events</h2>

                {events.length > 0 ? (
                    events.map(event => (
                        <article key={event.id} className="event-card">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p>
                                <strong>When: </strong>
                                {new Date(event.starts_at).toLocaleString(undefined, {
                                    dateStyle: 'medium',
                                    timeStyle: 'short'
                                })}
                            </p>
                        </article>
                    ))
                ) : (
                    <p>No events scheduled at this location yet!</p>
                )}
            </section>
        </div>
    )
}

export default LocationEvents
