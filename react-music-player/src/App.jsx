import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://brandingforum.org/wp-content/uploads/2023/10/spotify-logo-1024x651.webp" target="_blank">
          <img src="https://brandingforum.org/wp-content/uploads/2023/10/spotify-logo-1024x651.webp" alt="React logo" />
        </a>
      </div>
      <h1>Spotify API Music Player</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Coming in {count} days
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
