// const name = "Michael";
// function main() {
//   const divEl = document.querySelector('#root');
//   const h1El = document.createElement('h1');
//   h1El.textContent = name;
//   const h2El = document.createElement('h2');
//   h2El.textContent = name;
//   divEl.append(h1El);
//   divEl.append(h2El);
//   const div = document.createElement('div');
//   div.innerHTML = "<b>Blah</b>";
//   divEl.append(div);
// }

// main();

const productsLink = document.querySelector('#products');
const dropdownMenu = document.querySelector('.menu');
productsLink.addEventListener('click', function(event) {
  dropdownMenu.classList.toggle('hidden')
})

const form = document.querySelector("form")
const usernameEl = document.querySelector('#username');
const passwordEl = document.querySelector('#password');
form.addEventListener('submit', e => {
  e.preventDefault();
  const username = usernameEl.value;
  const password = passwordEl.value;
  if(password.length < 8) {
    alert("Password needs to be longer than 8 characters")
  }
})
const products = [
  {
    name: 'GE Profile Opal 1.0 Nugget Ice Maker',
    img: "https://m.media-amazon.com/images/I/71DTrjqUOyL._SX522_.jpg",
    price: 469.00
  },
  {
    name: 'Pet Grooming Brush',
    img: 'https://m.media-amazon.com/images/I/71ki1ydVToL._SX679_.jpg',
    price: 14.99
  },
  {
    name: 'USB C Wall Charger Block 20W',
    img: 'https://m.media-amazon.com/images/I/61eoxoiD3jL._AC_SX679_.jpg',
    price: 14.99
  }
]

const productsTemplate = products.map(product => `
  <div class="product">
    <p>${product.name}</p>
    <img src="${product.img}">
    <p>$${product.price}</p>
  </div>
`)

const productsEl = document.querySelector('#productsList');
productsEl.innerHTML = productsTemplate.join('');