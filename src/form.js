//  create a form that validates live
//  able to add fields to the form

const inputFactory = (name, type, validation, required) => {
  //  create label and input
  const label = document.createElement('label');
  label.innerText = name;
  const input = document.createElement('input');
  label.appendChild(input);

  //  set input properties
  input.setAttribute('type', type);
  if (required) {
    input.toggleAttribute('required');
  }
  input.addEventListener('blur', () => {
    validation(input);
  });
  //  reset form validity when editing
  input.addEventListener('focus', () => {
    input.setCustomValidity('');
  });

  //  do stuff
  const obj = { label, input };
  return obj;
};

const formFactory = (container) => {
  const form = document.createElement('form');
  container.appendChild(form);
  const inputs = [];
  //  create submit button for the form
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.addEventListener('click', (event) => {
    //  prevent page reload
    if (inputs.some((elem) => !elem.input.checkValidity())) {
      return false;
    }
    console.log('Form Complete!');
    event.preventDefault();
  });
  form.appendChild(submit);

  const addEmail = (title) => {
    const validation = (elem) => {
      if (!elem.checkValidity()) {
        elem.setCustomValidity('Please enter a valid email address');
      } else {
        elem.setCustomValidity('');
      }
    };
    const input = inputFactory(title, 'email', validation, true);
    inputs.push(input);
    form.insertBefore(input.label, submit);
  };

  const addText = (title, errorMessage) => {
    const validation = (elem) => {
      if (!elem.checkValidity()) {
        elem.setCustomValidity(errorMessage);
      } else {
        elem.setCustomValidity('');
      }
    };
    const input = inputFactory(title, 'text', validation, true);
    inputs.push(input);
    form.insertBefore(input.label, submit);
  };

  const addPattern = (title, pattern, errorMessage) => {
    const validation = (elem) => {
      if (!elem.checkValidity()) {
        elem.setCustomValidity(errorMessage);
      } else {
        elem.setCustomValidity('');
      }
    };
    const input = inputFactory(title, 'text', validation, true);
    inputs.push(input);
    form.insertBefore(input.label, submit);

    // add the pattern to the input
    input.input.setAttribute('pattern', pattern);
  };

  const addPassword = (title, minLength, errorMessage) => {
    const validation = (elem) => {
      if (!elem.checkValidity()) {
        elem.setCustomValidity(errorMessage);
      } else {
        elem.setCustomValidity('');
      }
    };
    const input = inputFactory(title, 'password', validation, true);
    inputs.push(input);
    form.insertBefore(input.label, submit);

    // add the minlength to the input
    input.input.setAttribute('minLength', 5);
  };

  //  do stuff
  const obj = {
    form, inputs, addEmail, addText, addPattern, addPassword,
  };
  return obj;
};

export default { formFactory };

/* <form>
            <label>Email</label>
            <input type="email" required></input></br>
            <label>Country</label>
            <input type="text" required></input></br>
            <label>Postal Code</label>
            <input type="text" required pattern="[a-zA-Z]\d[a-zA-Z]\s?\d[a-zA-Z]\d"></input></br>
            <label>Password</label>
            <input type="password" required></input></br>
            <label>Confirm Password</label>
            <input type="password" required></input></br>
            <input type="submit" value="Submit"></input>
          </form> */
