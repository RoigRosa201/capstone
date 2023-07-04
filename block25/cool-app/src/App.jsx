import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Product from './components/Product'
import Button from './components/Button'

const defaultProducts = [
  {
    name: 'GE Washer/Dryer',
    price: 1999.99,
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6530/6530134_sd.jpg;maxHeight=272;maxWidth=400'
  },
  {
    name: 'MacBook Air 13.3',
    price: 999.99,
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=272;maxWidth=400'
  },
  {
    name: "Insignia 55\" TV",
    price: 399.99,
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450247_sd.jpg;maxHeight=272;maxWidth=400' 
  }
]

function App() {
  const [products, setProducts] = useState(defaultProducts);
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Nav />
      <main>
        {
          products.map(({name, price, image}, index) => (
            <Product
              key={index}
              name={name}
              price={price}
              image={image}
            />
          ))
        }
      </main>
      <section>
        <h2>Guided Practice</h2>
        <Button count={count} setCount={setCount}/>
      </section>
    </div>
  )
}

export default App
