import { useState } from 'react'

type Props = {
  goBack: any
}

// It will display a grid based on what button size is press
// It will display a tool section for possible tools i may make

function Painter({ goBack }: Props) {
  const [selectedColor, setSelectedColor] = useState('#000000') //Sets the default color to black
  const handleColorChange = (event: any) => {
    setSelectedColor(event.target.value) // when activated it will change the color to whatever thing updated it
  }

  return (
    <div className="center">
      <div className="container">
        <div className="tools">
          <h1>Toools placement</h1>{' '}
          {/* I'll place the tools in its own separate file*/}
          <input
            type="color"
            id="color-picker"
            value={selectedColor}
            onChange={handleColorChange}
          />
        </div>
        <div className="canvas">
          <h2>Grid placement</h2>
        </div>
      </div>
      <p>I don't know right now</p>
      <div className="buttons-holder button-bottom">
        <button onClick={() => goBack(null)}>Back</button>
      </div>
    </div>
  )
}
export default Painter
