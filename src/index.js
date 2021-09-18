import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const img1 = "https://picsum.photos/300/300";
const img2 = "https://picsum.photos/740/300";
const img3 = "https://picsum.photos/310/300";
const home = "https://dotaustere.com";

const heading = {
  color: "crimson",
  fontSize: "30px",
  fontFamily: "'Bebas Neue', cursive",
  fontWeight: "bold",
  margin: "30px 0",
  textAlign: "center",
  letterSpacing: "2px" 
}



ReactDOM.render(
  <>
   <h1 style={heading}>An Apple A Day Keeps The Doctor Away!</h1>
   
  <div className="img_wrapper">
    <img src= { img1 } />

    <a href= { home } target="_blank" >
     <img src= { img2 } />
    </a>

   <img src= { img3 } />
   </div>
   
  </>,
  document.getElementById("root")
);


// React Fragments //
  // In React there are three ways to add multiple JSX elements within the render method.
  // 1) Div Method. (Creates an extra div)
  // 2) Array of Elements Method. (In this case we've to put commas after every element of
  // the Array.)
  // 3) React.Fragment Method.(Prefered Method!)

// JSX //  
  // In React, we can use JS within JSX elements by using pair of Curly Braces "{}".
  // Within the curly braces we can perfom any expression, arithmetic operation or any 
  // Math method.
  // We can only use "Expressions" within the curly braces.
  // We can't use any "Statement" within the curly braces.

  // Expressions => {Any Variable, Any Arithmetic Operation}.
  // Statement => {if else conditions, for loops }

// Template Literals/Strings //
  // First Cruly braces then BackTicks hen Dollar sign and then again curly braces are used to write template strings.
  // By using Template Literals, we can use "Strings" and Expressions/Constants/Variables
  // together without using the Concatination and the other braces method.

// JSX Attributes //
  // HTML Global Attributes.
  // Self Closing Tag.

// inLine styling //
  // To style an element in React via Inline Styling, We have to create an Object & giving it the
  // styling properties as (key: value) pairs.
  // Then we have to use the object {name} in the element.
  // Note that, while styling the element, we have to use the camelCase instead of kebab-case.