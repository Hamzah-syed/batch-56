import Button from "../components/button"

function Homepage() {
  let firstName = 'Hamzah'

  return (
    <div>
      <h1>Hello {firstName}</h1>
      <Button  text="download for windows" />
      <Button  text="open in your browser" />
    </div>
  )
}

export default Homepage