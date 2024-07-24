import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {

   return (
      <>
         <Header/>
         <Body/>
      </>
   );
}

// the above is JSX, allows us to write HTML in JS.
// placed in return statement of functional component.
// like a normal function, must be called to work

// (1st letter of) ALL COMPONENT NAMES (FILE NAME AND FUNCTION NAME) IN REACT MUST BE CAPITALISED

// Transpiling: interpreting programming language and translating it to specific target language (JS --> HTML)

// component JSX return statements must all be wrapped in top level element like a <div> or a fragment <>...</>

/* 

props: basically an object that enables dynamic content

(index.js)
root.render(<App title="Yabbadabbadoo"/>);

(App.js)
export function App(props) {
   return (
      <h1>{props.title}</h1>
   );
}

==> heading becomes Yabbadabbadoo

props can send anything: strings, numbers, functions, arrays, objects...

component sending props data is 'parent'
component receiving data is 'child' (there can be multiple children, and these children can pass data on to 'grandchildren')
only one direction: not possible to communicate from child to parent
a child CANNOT modify its props, can only read and use them


Events: clicks, movements, keyboard events
Event listeners and triggers

In HTML (obstrusive):
<button id="a-button" onclick="doThis()">
   Click me!
</button>

In Plain JS (unobstrusive):
document
   .querySelector('#a-button')
   .addEventListener('click', doThis);

React: events handled using JSX event attributes (similar to HTML)
<button onClick = {clickHandler}>
   Click me!
</button>
>>>> (note the camelCase, no ())

use try...catch to handle error related to events

Data
> Props data: outside components that they receive and work with but cannot mutate
> State data: inside components that they can control and mutate

Hooks: functions that hook into react state and lifecycle features from components.

useState hook: manages state within a component and keeps track of it

import React, { useState } from 'react';




const [inputText, setText] = useState('hello'); 

>>> default: inputText is 'hello'

function handleChange(e) { 
   setText(e.target.value); 
} 

>>> this fn reads latest input value from <input>, calls setText to update local state of inputText.

return ( 
   <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
   </> 
); 

React Router

<Link/>
<Link/>
<Routes>
   <Route/>
   <Route/>
</Routes>

necessary since react cant handle anchor tags like in normal html

>>> ternary operators:

const aBool = true;
return (
   <>
      {aBool
         ? <p>This is shown!</p>
         : <p>This is never shown.</p>
      }
   </>
);

>>> AND operator:

return (
   <>
      {true && <h1>This will be rendered!</h1>}
      {false && <h1>This will never be rendered.</h1>}
   </>
);

  
*/
