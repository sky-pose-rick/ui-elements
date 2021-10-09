console.log('webpack compiled to main.js');

// default css should load before the page's specific css
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

const holder = document.querySelector('#dropdown');

const sampleTitle = document.createElement('button');
sampleTitle.innerText = 'I am a button';

const button1 = document.createElement('button');
button1.innerText = 'I am a button 2';

const button2 = document.createElement('button');
button2.innerText = 'I am a button 3';

const dropdown = dropdownFactory(sampleTitle, [button1, button2]);
dropdown.attachTo(dropdown, holder);
