import { useState } from 'react'

import Select from './Select'
import Painter from './Painter'

function App() {
  const [gridSize, setGridSize] = useState<number | null>(null)
  if (gridSize === null) {
    return <Select gridSelect={setGridSize} />
  }
  return <Painter goBack={setGridSize} />
}
export default App
