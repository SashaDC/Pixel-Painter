type Props = {
  gridSelect: (size: number) => void
}

function Select({ gridSelect }: Props) {
  return (
    <div className="center">
      <header>
        <h1>Pixel Painter</h1>
        <h2>Select a grid size:</h2>
      </header>
      <div className="buttons-holder">
        <button onClick={() => gridSelect(4)}>x4</button>
        <button onClick={() => gridSelect(8)}>x8</button>
        <button onClick={() => gridSelect(16)}>x16</button>
      </div>
      <footer>
        <p className="author">A project made by SashaDC</p>
      </footer>
    </div>
  )
}

export default Select
