import { useState, useEffect } from 'react'

import Select from './Select'
import Painter from './Painter'

function App() {
  const [gridSize, setGridSize] = useState<number | null>(null)
  useEffect(() => {
    // Load whatever gridSize is saved to the local storage.
    const saved = localStorage.getItem('gridSize')
    if (saved) setGridSize(Number(saved))
  }, [])

  useEffect(() => {
    // Save gridSize to local storage.
    if (gridSize !== null) {
      localStorage.setItem('gridSize', String(gridSize))
    }
  }, [gridSize])

  if (gridSize === null) {
    return <Select gridSelect={setGridSize} />
  }
  return <Painter setGridSize={setGridSize} gridSize={gridSize} />
}
export default App
