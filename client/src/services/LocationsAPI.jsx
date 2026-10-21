const API_URL = '/api/locations'

export const getAllLocations = async () => {
    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error('Failed to fetch locations')
    }

    return response.json()
}

export const getLocationById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`)

    if (!response.ok) {
        throw new Error('Failed to fetch location')
    }

    return response.json()
}
