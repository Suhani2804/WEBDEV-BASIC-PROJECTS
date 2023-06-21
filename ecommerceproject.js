const button = document.getElementsByClassName("btn2");
const imageURL = document.getElementById("imageId");
const description= document.getElementById("descriptionId");
const section= document.getElementsByClassName("thumbnail")[0];
const search=document.getElementById("search");
const section2= document.getElementsByClassName("jssection")[0];
const buttonsearch=document.getElementById("searchbutton"); //for search bar icon
let products;
const children=section2.children;

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    products = data.products;
    showProducts(products);
});

search.addEventListener("change", function (e) {
  console.log(e.target.value);//e.target.value 
  filterProducts(e.target.value);
});
  
function filterProducts(searchText) {
  let filteredProducts = products.filter((product) =>
    product.title.includes(searchText)
  );

  for (var i = 0; i < children.length; i++) {
    children[i].style.display = "";
    let textContent = children[i].getElementsByTagName("p")[0].textContent;
    const filterItem = filteredProducts.find(
      (product) => product.title === textContent
    );
    if (filterItem) {
      children[i].style.display = "";
    } else {
      children[i].style.display = "none";
    }
  }
}

function createProduct(imageUrl, description) {
  const productDiv = document.createElement("div");
  productDiv.className = "card";
  const image = document.createElement("img");
  image.className = "image";
  image.setAttribute("src", imageUrl);
  console.log("image", image);
  const paragraph = document.createElement("p");
  paragraph.innerHTML = description;
  console.log("paragraph", paragraph);
  productDiv.appendChild(image);
  productDiv.appendChild(paragraph);
  return productDiv;
}

function showProducts(products) {
  products.forEach((element) => {
    const { thumbnail, title } = element;
    const product = createProduct(thumbnail, title);
    section2.appendChild(product);
  });
}



//to add another image of product
button[0].addEventListener("click", function () {
    console.log("button clicked");
    const ecommerce= createecommerce(imageURL,description);
    console.log(section);
    section.appendChild(ecommerce);
    console.log("ecommerce section", section);
  });

  imageURL.addEventListener("change",function(e)
{
    console.log(e);
    const value=e.target.value;
})

  function createecommerce(imageId,descriptionId)
{
    const ecommercediv=document.createElement("div");
    //above line is to create a div element
    ecommercediv.className="card";
    //this is a class inside div and class name is card
    const image=document.createElement("img");
    image.className = "image";
    image.setAttribute("src", imageURL.value);
    const paragraph=document.createElement("p");
    // paragraph.innerHTML= "text";
    //the above line is to write content in different elements
    //text in double quotes is written
    paragraph.innerHTML= description.value;
    console.log("paragraph", paragraph);
    ecommercediv.appendChild(image);
    ecommercediv.appendChild(paragraph);
    console.log("ecommerce div", ecommercediv);
    return ecommercediv;
}

