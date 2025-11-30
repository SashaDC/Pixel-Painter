import { useState, useEffect } from 'react'

type Props = {
  value: string
  gridSize: number
}

function Grid({ gridSize, value }: Props) {
  const totalCells = gridSize
  const totalGridCells = totalCells * totalCells

  const [cellColors, setCellColors] = useState(
    Array(totalGridCells).fill('#fff')
  )

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem(`Grid-Data:${gridSize}`)
    if (saved) {
      setCellColors(JSON.parse(saved))
    }
  }, [gridSize])

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem(`Grid-Data:${gridSize}`, JSON.stringify(cellColors))
  }, [cellColors, gridSize])

  const handleClick = (i: number) => {
    console.log('Clicked cell', i, 'with color', value)
    const newColors = [...cellColors]
    newColors[i] = value
    setCellColors(newColors)
  }

  const cells = []
  for (let i = 0; i < totalGridCells; i++) {
    cells.push(
      <div
        key={i}
        className="grid-cell"
        style={{ backgroundColor: cellColors[i] }}
        onClick={() => handleClick(i)}
      ></div>
    )
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${totalCells}, 1fr)`,
    gridTemplateRows: `repeat(${totalCells}, 1fr)`,
  }

  return (
    <div id="grid-container" style={gridStyle}>
      {cells}
    </div>
  )
}

export default Grid
