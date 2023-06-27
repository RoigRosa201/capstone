import { useState } from 'react';

function Counter() {
  // first thing array destructured is the state value
  // second thing destructured is a function to change the first value
  let [count, setCount] = useState(0);
  return (
    <>
      {/* onClick is a synthetic event to add a click event listener, pass it a callback */}
      <button onClick={() => setCount(count + 1)}>Add to counter</button>
      {/* count state is being put into this h2 */}
      <h2>{count}</h2>
    </>
  )
}

export default Counter;