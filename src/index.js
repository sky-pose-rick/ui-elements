import dropdownFactory from './dropdown';

const holder = document.querySelector('#dropdown');

const sampleTitle = document.createElement('button');
sampleTitle.innerText = 'I am a button';

const button1 = document.createElement('button');
button1.innerText = 'I am a button 2';

const button2 = document.createElement('button');
button2.innerText = 'I am a button 3';

const dropdown = dropdownFactory(sampleTitle, [button1, button2]);
dropdown.attachTo(dropdown, holder);
