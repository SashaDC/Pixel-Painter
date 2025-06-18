//It will read the domain.
//Get what ever number the domain says
//Use the number to display a css grid thats interactible
type Props = {
  goBack: any
}

function Painter({ goBack }: Props) {
  return (
    <div className="center">
      <div className="container">
        <div className="tools">
          <h1>Toools placement</h1>
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
