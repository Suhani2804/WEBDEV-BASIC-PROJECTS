//this file contains react rendering (basic)
//jsx thoery and jsx rendering objects

import React from "react";
import ReactDOM from "react-dom/client";

   const header= React.createElement('h1',{},'Hello world using react'); //{} in this line is for attributes like class,id etc and for styling
   //react.createelement returns a js object always
   const root= ReactDOM.createRoot(document.getElementById("root"));
   root.render(header); //root . render is just like appendchild of plain javascript
    //above line adds header to root

   // if there are a lots of nested elements react.createelement becomes difficult to use
    //   this is when JSX came into the picture
    // jsx has html like structure
    //jsx code gets converted into react element which is a js object
    //jsx is used in react but jsx is also used with other libraries


{/* <div id="parent">
    <div id="child1">
        <h1 id="header">hii child1</h1>
    </div>
    <div id="child2">
        <h1 id="header">hii child2</h1>
    </div>
</div> */}

//above is a nested code so now to render this with react:

const child1Div=React.createElement("div",{id:"child1"},React.createElement('h1',{id:"header"},"hii child1"));
const child2Div=React.createElement('div',{id:"child2"},React.createElement('h1',{id:"header"},"hii child1"));
const parentDiv=React.createElement('div',{id:parent},{})



//JSX 
//the above code due to nesting becomes very complicated
//so we use JSX
//JSX is HTML like code to make it easy
//to use this just put the html code in a variable of js
//compiler does not understand jsx and that is where babel comes in
//babel---->transpiles JSX to JS OBJECT(react element)
//everything we create is a component in our react application
//two types of components----->functional(new way of writing ), class based(old way of writing)

//functional components
//it is a function that returns JSX is a functional component
//eg: const abc=()=>
// {
//     return{
//         <div>
//         <h1>hiiii</h1>
//         </div>
//     }
// }

//if you write a jsx code in multiple lines use paranthesis...u can though write the code in single lines
//composition--->putting one component inside another component is react
//jsx should always have one parent element like div,section etc
//but this leads to an extra div to just add a parent element\
//so we can use react.fragment instead of a div
//and instead of writing react.fragment multiple times just write <> </>
//any javascript code can we written inside jsx using {} 
//in jsx when u add a class u always write as className
