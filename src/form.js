//  create a form that validates live
//  able to add fields to the form

const inputFactory = (name, validation, required) => {
  const label = document.createElement('label');
  const input = label.createElement('input');
  label.appendChild(input);

  if (required) {
    input.toggleAttribute('required');
  }

  input.addEventListener('blur', () => {
    validation();
  });

  //  do stuff
  const obj = { label, input };
  return obj;
};

const formFactory = () => {
  //  do stuff
  const obj = { stub: 'stub' };
  return obj;
};

export default { formFactory };
