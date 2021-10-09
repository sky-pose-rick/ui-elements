import dropdown from './dropdown';

const ddHolder = document.querySelector('#dropdown');

const ddSampleTitle = document.createElement('button');
ddSampleTitle.innerText = 'I am a button';

const ddButton1 = document.createElement('button');
ddButton1.innerText = 'I am a button 2';

const ddButton2 = document.createElement('button');
ddButton2.innerText = 'I am a button 3';

const dropdownElem = dropdown.dropdownFactory(ddSampleTitle, [ddButton1, ddButton2]);
dropdownElem.attachTo(dropdownElem, ddHolder);
