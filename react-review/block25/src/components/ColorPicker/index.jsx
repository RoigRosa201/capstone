const ColorPicker = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{/* colors go here */}</div>
    </div>
  )
}

export default ColorPicker;