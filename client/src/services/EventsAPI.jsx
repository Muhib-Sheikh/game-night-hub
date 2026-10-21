const API_URL = '/api/locations'

export const getEventsByLocationId = async (locationId) => {
    const response = await fetch(
        `${API_URL}/${locationId}/events`
    )

    if (!response.ok) {
        throw new Error('Failed to fetch events')
    }

    return response.json()
}
