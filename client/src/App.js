import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ImageForm from './components/Form';
import axios from 'axios';

/* do not edit index.js, edit App.js instead */
/* stay in functional based react, can use react hooks in functional */

function App() {
  /* // create a function called "createUserForm" that generates the HTML elements for a text user input and submit button fields
  function createUserForm() {
  // create a form element
  const form = document.createElement('form');
  // create an input element for the user's text input
  const input = document.createElement('input');
  // set the type attribute of the input element to "text"
  input.setAttribute('type', 'text');
  // set the placeholder attribute of the input element to prompt the user for their text input
  input.setAttribute('placeholder', 'Describe your image');
  // create a submit button element
  const submitBtn = document.createElement('button');
  // set the text content of the submit button to "Submit"
  submitBtn.textContent = 'Submit';
  // append the input element and the submit button to the form
  form.appendChild(input);
  form.appendChild(submitBtn);
  // return the form element
  document.querySelector(".App").appendChild(form);
  }

  useEffect(() => {
    createUserForm();
  })*/

  axios.get('http://localhost:3001/test')
  .then((response) => {
    console.log(response);
  })

  return (
    <div className="App">
      <header className="App-header">
       < ImageForm placeholder="Describe your image"/>
      </header>
    </div>
  );
}

export default App;
