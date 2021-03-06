// default css should load before the page's specific css
// create a dropdown menu with a specified element as the root with other elements as children
const dropdownFactory = (myTitle = null, myElements = []) => {
  // holds the title element and list of dropdown elements
  // initialize variables
  const dropdownContainer = document.createElement('div');
  dropdownContainer.className = 'ddContainer';

  let title = myTitle;
  if (!title) { title = document.createElement('div'); }
  dropdownContainer.appendChild(title);

  const elementContainer = document.createElement('div');
  dropdownContainer.appendChild(elementContainer);

  const elementList = document.createElement('ul');
  elementContainer.appendChild(elementList);
  elementContainer.toggleAttribute('hidden');

  dropdownContainer.addEventListener('mouseenter', () => {
    elementContainer.toggleAttribute('hidden');
  });

  dropdownContainer.addEventListener('mouseleave', () => {
    elementContainer.toggleAttribute('hidden');
  });

  const elements = myElements;
  elements.forEach((element) => {
    elementList.appendChild(element);
  });

  // functions
  const attachTo = (obj, parent) => {
    parent.appendChild(obj.dropdownContainer);
  };

  const setTitle = (obj, newTitle) => {
    // replace the title element
    obj.title.remove();
    obj.title = newTitle;

    obj.dropdownContainer.insertBefore(obj.title, obj.elementContainer);
  };

  const resetElements = (obj) => {
    // delete all dropdown elements
    obj.elementsContainer.remove();
    obj.elementContainer = document.createElement('ul');
    obj.container.appendChild(obj.elementsContainer);
  };

  const addElement = (obj, element) => {
    obj.elements.push(element);
    obj.elementContainer.appendChild(element);
  };

  // build the object to return
  const obj = {
    dropdownContainer,
    title,
    elementContainer,
    elementList,
    elements,
    attachTo,
    setTitle,
    resetElements,
    addElement,
  };
  return obj;
};

export default { dropdownFactory };
