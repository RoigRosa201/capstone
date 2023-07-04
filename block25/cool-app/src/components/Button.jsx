export default function Button({count, setCount}) {
  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )
}