
import productData from "./Data.js";
const App = () => {
  const main = document.querySelector(".main");
  const dataAPI = "https://fakestoreapi.com/products/1";
  const callAPI = async () => {
    const reponse = await fetch(dataAPI);
    const convertJSON = await reponse.json();
    console.log(convertJSON);
    const storeData  = [];
    storeData.push(convertJSON)
    console.log(storeData);
    return (
      storeData.forEach((data)=>{
        main.innerHTML += `<div class="product-card" ${data.id}>
    <div class="product-image">
        <img src=${data.image} alt="Product Image">
    </div>
    <div class="product-details">
        <h2 class="product-title">${data.category}</h2>
        <p class="product-description">${data.description}</p>
        <div class="product-price">$ ${data.price}</div>
        <button class="buy-now-button">Buy Now</button>
    </div>
</div>`
      })
    );
  };
  const productDataAPI = callAPI();
  return productDataAPI;
};

export default App();

