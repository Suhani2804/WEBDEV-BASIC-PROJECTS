
    // var image = document.getElementById("imageId");
    // const button = document.getElementsByClassName("btn");
    // const imageCard = document.getElementById("imageId1");
    // const description =  document.getElementById("descriptionId");    
    // button[0].addEventListener("click" , function(){
    //      console.log("button clicked");
    //      const value = image.value;
    //      imageCard.setAttribute("src", value);
    // }) 

const button = document.getElementsByClassName("btn");
const description = document.getElementById("descriptionId"); 
const imageURL=document.getElementById("imageId");
const section=document.getElementsByClassName("thumbnails");
//the above line is to get image url from user


 const albumdiv=document.createElement("div");
 //above line is to create a div element
 albumdiv.className="card";
 //this is a class inside di
 console.log("album div",albumdiv);
 //this is to check if the div elemnt is created

 const image=document.createElement("img");


 const paragraph=document.createElement("p");
 paragraph.innerHTML= "text";
//the above line is to write content in different elements


