// const productList = document.querySelector(".product_list");

// const makiLosos = {
//   src: "/sushi.webp",
//   title: "Maki Losos",
//   description: "nori, rýže, losos, sezam",
//   price: 144,
// };

// const makiTuna = {
//   src: "/sushi.webp",
//   title: "Maki Tuna",
//   description: "nori, rýže, kreveta, sezam",
//   price: 140,
// };

// const makiUnagi = {
//   src: "/sushi.webp",
//   title: "Maki Unagi",
//   description: "nori, rýže, ",
//   price: 160,
// }

// const makiRoll = {
//   src: "/sushi.webp",
//   title: "Maki Unagi",
//   description: "nori, rýže, ",
//   price: 160,
// }

// const makiSezam = {
//   src: "/sushi.webp",
//   title: "Maki Unagi",
//   description: "nori, rýže, ",
//   price: 160,
// }

// const makiTima = {
//   src: "/sushi.webp",
//   title: "Maki Unagi",
//   description: "nori, rýže, ",
//   price: 160,
// }

// const products = [makiLosos, makiTuna,  makiUnagi, makiRoll,  makiSezam, makiTima];

// <array>.forEach(<function>);
// products.forEach(function (productData) {
//   const productChild = document.createElement('div');
//   productChild.className = 'product';
//   productChild.innerHTML = `
//   <div class="img_wrapper">
//   <img class="product_img" src="/sushi.webp" />
//   </div>
//   <div class="description">
//     <h2 class="product_title">${productData.title}</h2>
//     <div class="product_structure">
//       <span class="structure_text">${productData.address}</span>
//       <span class="structure_text">${productData.description}</span>
//       <span class="structure_text">alergeny: 1, 2, 4, 11</span>
//     </div>
//     <div class="button">
//       <span class="product_price">${productData.price} Kc</span>
//       <button class="product_basket"></button>
//     </div>
//   </div>
//   `

//   productList.appendChild(productChild)
// })

const catalogsElem = document.querySelector(".catalogs");

const burgers = {
  title: "БУРГЕРЫ",
  src: "burgers.jpg",
}
const snacks = {
  title: "ЗАКУСКИ",
  src: "/snacks.jpg",
}
const comboSet = {
  title: "КОМБО НАБОРЫ",
  src: "/comboSet.jpg",
}
const drinks = {
  title: "НАПИТКИ",
  src: "/drinks.jpg",
}
const sauces = {
  title: "СОУСЫ",
  src: "sauces.jpg",
}

const catalogList = [burgers, snacks, comboSet, drinks, sauces];

catalogList.forEach(function (catalogData) {
  const catalogChild = document.createElement('div');
  catalogChild.className = "catalog_item"
  catalogChild.innerHTML = catalogData.title
  catalogsElem.appendChild(catalogChild)
  catalogChild.style.backgroundImage = `url(./${catalogData.src})`
  })









// const productList = document.querySelector(".burgers_sheet");
  
// const makiLosos = {
//   src: "/",
//   title: "Maki Losos",
//   price: 12,
// };
  
// const makiTuna = {
//   src: "/",
//   title: "Maki Tuna",
//   price: 140,
// };
    
// const makiUnagi = {
//   src: "/",
//   title: "Maki Unagi",
//   price: 160,
// }
    
// const makiRoll = {
//   src: "/",
//   title: "Maki Unagi",
//   price: 160,
// }
    
// const makiSezam = {
//   src: "/",
//   title: "Maki Unagi",
//   price: 160,
// }
    
// const makiTima = {
//   src: "/",
//   title: "Maki Unagi",
//   price: 160,
// }

// const products = [makiLosos, makiTuna,  makiUnagi, makiRoll,  makiSezam, makiTima];

// products.forEach(function (productData) {
//   const productChild = document.createElement('div');
//   productChild.className = 'product';
//   productChild.innerHTML = `
//   <div class="burgers_sheet">
//       <div class="title_sheet">БУРГЕРЫ</div>
//       <div class="product_position">
//         <img class="product_photo" src="./cizburger.png" >
//         <div class="description">
//         <div class="title_product">${productData.title}</div>
//         <div class="price_products">
//         <div class="price">${productData.title}</div>
//         <button class="basket">${productData.title}</button>
//         </div>
//         </div>
//       </div>
//     </div>
//     `

// productList.appendChild(productChild)
// })