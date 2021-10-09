// create an image carousel contained within the provided element
const carouselFactory = (parentElem) => {
  // create the html elements
  const parent = parentElem;
  const container = document.createElement('div');
  parent.appendChild(container);
  container.className = 'carousel';

  const sliderView = document.createElement('div');
  container.appendChild(sliderView);
  sliderView.className = 'carousel-slider-view';

  const slider = document.createElement('div');
  sliderView.appendChild(slider);
  slider.className = 'carousel-slider';

  const leftArrow = document.createElement('button');
  container.appendChild(leftArrow);
  leftArrow.className = 'carousel-arrow';
  leftArrow.classList.add('carousel-arrow-left');
  leftArrow.innerText = '<';

  const rightArrow = document.createElement('button');
  container.appendChild(rightArrow);
  rightArrow.className = 'carousel-arrow';
  rightArrow.classList.add('carousel-arrow-right');
  rightArrow.innerText = '>';

  const tabHolder = document.createElement('div');
  container.appendChild(tabHolder);
  tabHolder.className = 'carousel-tab-holder';

  const tabs = [];
  const imgs = [];
  const currentIndex = 0;
  const timeoutSkips = 0;

  const addImage = (obj, src) => {
    const imgHolder = document.createElement('div');
    obj.slider.appendChild(imgHolder);
    const img = document.createElement('img');
    imgHolder.appendChild(img);
    img.src = src;
    img.className = 'carousel-img';
    imgHolder.className = 'carousel-img-holder';
    obj.imgs.push(imgHolder);

    const uiTab = document.createElement('button');
    obj.tabHolder.appendChild(uiTab);
    uiTab.className = 'carousel-tab';
    uiTab.innerText = '';

    obj.tabs.push(uiTab);
    if (obj.tabs.length === 1) { obj.tabs[0].classList.toggle('carousel-tab-selected'); }
    const tabID = tabs.length - 1;

    // add event listener to switxh to tab
    uiTab.addEventListener('click', () => {
      obj.changeImage(obj, tabID);
    });
  };

  const changeImage = (obj, newIndex) => {
    obj.tabs[obj.currentIndex].classList.toggle('carousel-tab-selected');
    obj.tabs[newIndex].classList.toggle('carousel-tab-selected');

    obj.slider.style.right = `${newIndex * 100}%`;
    obj.currentIndex = newIndex;

    setTimeout(() => {
      obj.autoAdvanceImage(obj);
    }, 5000);
    obj.timeoutSkips += 1;
  };

  const autoAdvanceImage = (obj) => {
    if (obj.timeoutSkips === 0) {
      if (obj.currentIndex >= obj.imgs.length - 1) {
        changeImage(obj, 0);
      } else {
        changeImage(obj, obj.currentIndex + 1);
      }
    }
    // decrement timeout counter by one
    obj.timeoutSkips -= 1;
  };

  // create the object
  const obj = {
    container,
    addImage,
    imgs,
    parent,
    slider,
    tabs,
    tabHolder,
    currentIndex,
    changeImage,
    timeoutSkips,
    autoAdvanceImage,
  };

  // add event listeners that reference the object
  rightArrow.addEventListener('click', () => {
    if (obj.currentIndex >= obj.imgs.length - 1) {
      changeImage(obj, 0);
    } else {
      changeImage(obj, obj.currentIndex + 1);
    }
  });

  leftArrow.addEventListener('click', () => {
    if (obj.currentIndex <= 0) {
      changeImage(obj, obj.tabs.length - 1);
    } else {
      changeImage(obj, obj.currentIndex - 1);
    }
  });

  setTimeout(() => {
    obj.autoAdvanceImage(obj);
  }, 5000);

  return obj;
};

export default { carouselFactory };
