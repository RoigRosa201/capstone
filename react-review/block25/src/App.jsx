import { useState } from 'react'
import classNames from 'classnames'

const Color = ({color, setSelectedColor, selectedColor}) => {
  const classes = classNames(color, { selected: color === selectedColor })
  return <div onClick={() => setSelectedColor(color)} className={classes}></div>
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState('red')
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="purple"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;