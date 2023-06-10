//in addeventlistener there are 2 options on click to take input and change to verify during typing
const button = document.getElementsByClassName("btn");
//we need to have image and description on button click
const description = document.getElementById("descriptionId"); 
//above line is to get description from the user
const imageURL=document.getElementById("imageId");
//the above line is to get image url from user
const section=document.getElementsByClassName("thumbnails")[0];
//above line is to create a secion thumbnails
//getelementsbyclassname returns an array
//we havw put[0] as in section class thumbnails there is only one section which is the first one

// in below function(e) has no name it is used directly that is it is ananoymous function
// all ananoymous functions need a code inside it
imageURL.addEventListener("change",function(e)
{
    console.log(e);
    const value=e.target.value;
})

button[0].addEventListener("click", function () {
    console.log("button clicked");
    const album = createAlbum(imageURL, description);
    console.log(section);
    section.appendChild(album);
    console.log("album in section", section);
  });
  
function createAlbum(imageURL,description)
{
    const albumdiv=document.createElement("div");
    //above line is to create a div element
    albumdiv.className="card";
    //this is a class inside div and class name is card
    console.log("album div",albumdiv);
    //this is to check if the div elemnt is created
   
    const image=document.createElement("img");
    image.className = "image";
    image.setAttribute("src", imageURL.value);
   
    const paragraph=document.createElement("p");
    // paragraph.innerHTML= "text";
    //the above line is to write content in different elements
    //text in double quotes is written
    paragraph.innerHTML= description.value;
    console.log("paragraph", paragraph);

  albumdiv.appendChild(image);
  albumdiv.appendChild(paragraph);

  console.log("album div", albumdiv);

  return albumdiv;
}
