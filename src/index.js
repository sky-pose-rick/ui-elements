import dropdown from './dropdown';
import carousel from './imageCarousel';
import form from './form';

//  code to use the dropdown
const ddHolder = document.querySelector('#dropdown');

const ddSampleTitle = document.createElement('button');
ddSampleTitle.innerText = 'I am a button';

const ddButton1 = document.createElement('button');
ddButton1.innerText = 'I am a button 2';

const ddButton2 = document.createElement('button');
ddButton2.innerText = 'I am a button 3';

const dropdownElem = dropdown.dropdownFactory(ddSampleTitle, [ddButton1, ddButton2]);
dropdownElem.attachTo(dropdownElem, ddHolder);

//  code to use the carousel
const cContent = document.querySelector('#c-container');
const carouselElem = carousel.carouselFactory(cContent);

const imageSrcs = ['https://i.ytimg.com/vi/bHZVwmiWPNM/maxresdefault.jpg',
  'https://cdnen.samurai-gamers.com/wp-content/uploads/2021/05/16163043/sg-smt-3-nocturne-hd-remaster-thor-demon-boss.jpg',
  'https://static.wikia.nocookie.net/megamitensei/images/4/4b/Jack_frost_transparent.png',
  'https://i.ytimg.com/vi/z0-qFKpktkA/maxresdefault.jpg',
  'https://images.theconversation.com/files/399366/original/file-20210507-23-7ectsj.jpg?ixlib=rb-1.1.0&rect=6%2C343%2C4486%2C2243&q=45&auto=format&w=1356&h=668&fit=crop'];

imageSrcs.forEach((src) => {
  carouselElem.addImage(carouselElem, src);
});

// code to use the form
const formHolder = document.querySelector('#sample-form');
const formElem = form.formFactory();
console.log([formHolder, formElem]);
