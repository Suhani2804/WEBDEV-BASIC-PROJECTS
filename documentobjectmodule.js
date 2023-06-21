//ways of selecting an element using js by maniuplation of DOM
//DOM(Document object module)

//getElementById()-----> returns element object if found or null if no element with that id exists
//syntax: const b= document.getElementById("nameofelementid")

//getElemntsByClassName()-----> selects all elemnts of a specific class and retruns an array-like object of all elements found.
//syntax: const a= document.getElementsByClassName("classname")

//querySelector()----->used to select first elemnt that matches a specified CSS selector...returns the elemnt object if found and null if no elemnt matches.
//syntax: const container= document.querySelector(".container")

//querySelectorAll()----->select all elements that match a specified CSS selector. It returns an array-like object of all elements found.
//syntax: const paragraphs= document.querySelectorAll(".container p");



//Responding to User input and actions
//1. Add Event listeners----->it is a function that is called when a specific event occurs on an element
//2. use Form Elements-----> 

// Event propagation refers to the way events "bubble" up the DOM tree from the target element to its ancestors.
// By default, events will propagate up the tree until they reach the window object.
// This can cause unexpected behavior if event listeners are registered on parent elements that also handle the same event.
// To prevent this, you can use the stopPropagation() method on the event object.
// stopPropagation() stops the event from propagating any further up the DOM tree, ensuring that only the intended element receives the event.
// It's important to be aware of event propagation when handling events to avoid unintended consequences and ensure the expected behavior of your code.


//preventDefault()
//we can prevent the default behavior of an event using this

//stopPropagation()
//stop an event from propogating further to other elements
