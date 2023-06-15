const button = document.getElementsByClassName("btn2");
const myname = document.getElementById("nameid");
const product= document.getElementById("productid");
const section= document.getElementsByClassName("thumbnail")[0];

button[0].addEventListener("click", function () {
    console.log("button clicked");
    const ecommerce= createecommerce(myname,product);
    console.log(section);
    section.appendChild(ecommerce);
    console.log("ecommerce section", section);
  });

  function createecommerce(myname,product)
{
    const ecommercediv=document.createElement("div");
    //above line is to create a div element
    ecommercediv.className="card";
    //this is a class inside div and class name is card
    const image=document.createElement("img");
    image.className = "image";
    image.setAttribute("src", myname.value);
    const paragraph=document.createElement("p");
    // paragraph.innerHTML= "text";
    //the above line is to write content in different elements
    //text in double quotes is written
    paragraph.innerHTML= product.value;
    console.log("paragraph", paragraph);
    ecommercediv.appendChild(image);
    ecommercediv.appendChild(paragraph);
    console.log("ecommerce div", ecommercediv);
    return ecommercediv;
}

