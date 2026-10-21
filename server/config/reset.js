
import { pool } from './database.js'

const resetDatabase = async () => {
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    // Remove existing tables
    await client.query('DROP TABLE IF EXISTS events')
    await client.query('DROP TABLE IF EXISTS locations')

    // Create locations table
    await client.query(`
      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        emoji TEXT NOT NULL
      )
    `)

    // Create events table
    await client.query(`
      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(150) NOT NULL,
        description TEXT NOT NULL,
        starts_at TIMESTAMPTZ NOT NULL,
        location_id INTEGER NOT NULL REFERENCES locations(id)
      )
    `)

    // Add four gaming locations
    await client.query(`
      INSERT INTO locations (name, description, emoji)
      VALUES
        ('Tabletop Tavern', 'Board games and tabletop RPGs', '🎲'),
        ('Esports Lounge', 'Competitive and casual video gaming', '🎮'),
        ('Community Arcade', 'Retro and modern arcade games', '🕹️'),
        ('Strategy Café', 'Chess and strategy gaming meetups', '♟️')
    `)

    // Add two events per location
    await client.query(`
      INSERT INTO events (title, description, starts_at, location_id)
      VALUES
        ('Open Board Game Night', 'Bring your favorite board game or try something new.', '2026-10-24 19:00:00-04', 1),
        ('Dungeons & Dragons Meetup', 'Join a beginner-friendly fantasy adventure.', '2026-10-30 18:00:00-04', 1),

        ('Super Smash Bros Tournament', 'Compete in a friendly gaming tournament.', '2026-10-25 17:00:00-04', 2),
        ('Multiplayer Gaming Night', 'Team up for an evening of multiplayer games.', '2026-11-06 19:00:00-05', 2),

        ('Retro Arcade Challenge', 'Play classic arcade games and compete for high scores.', '2026-10-27 18:00:00-04', 3),
        ('Mario Kart Night', 'Race against other gamers in casual matches.', '2026-11-07 19:00:00-05', 3),

        ('Chess Club Meetup', 'Play casual chess matches with local players.', '2026-10-28 17:00:00-04', 4),
        ('Strategy Games Social', 'Discover new strategy games and meet other players.', '2026-11-08 16:00:00-05', 4)
    `)

    await client.query('COMMIT')
    console.log('Database reset successfully!')
    console.log('Created 4 locations and 8 events.')

  } catch (error) {
    await client.query('ROLLBACK')
    console.error('Error resetting database:', error)
    process.exitCode = 1
  } finally {
    client.release()
    await pool.end()
  }
}

resetDatabase()
