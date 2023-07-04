export default function Product({name, price, image}) {
  return (
    <div className="product">
      <img src={image} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

