const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//перебираем масив через функцию и шаблоній рядки

const imagesEllement = ({ url, alt }) => {


  return `
  <li class="site-item">
  <img
  class="site-img"
  src="${url}";
  alt="${alt}";
  width=300;
  height=200;>
  </li>
  `;
};
console.log(imagesEllement(images));
const imagesEllementOptions = images.map(imagesEllement).join(' ');
console.log(imagesEllementOptions);

const ulGallery = document.querySelector('.gallery');
ulGallery.insertAdjacentHTML('afterbegin', imagesEllementOptions);


// const massImg = images[0];


// const itemEl = document.createElement('li');
// itemEl.classList.add('site-item');

// const imagesEl = document.createElement('img');
// imagesEl.src = massImg.url;
// imagesEl.alt = massImg.alt;
// imagesEl.width = 600;
// imagesEl.classList.add('site-img');

// itemEl.appendChild(imagesEl);


// const ulGallery = document.querySelector('.gallery');
// ulGallery.appendChild(itemEl);



//или весь масив через for

// const elementsImg = [];

// for (let i = 0; i < images.length; i += 1) {
//   const massImg = images[i];

//   const itemEl = document.createElement('li');
//   itemEl.classList.add('site-item');

//   const imagesEl = document.createElement('img');
//   imagesEl.src = massImg.url;
//   imagesEl.alt = massImg.alt;
//   imagesEl.width = 300;
//   imagesEl.height = 200;
//   imagesEl.classList.add('site-img');

//   itemEl.appendChild(imagesEl);

//   elementsImg.push(itemEl);

// }
// console.log(elementsImg)

// const ulGallery = document.querySelector('.gallery');
// ulGallery.append(...elementsImg);





//или перебрать массив через map:
// const ulGallery = document.querySelector('.gallery');

// const elementsImg = images.map(massImg => {

//   const itemEl = document.createElement('li');
//   itemEl.classList.add('site-item');

//   const imagesEl = document.createElement('img');
//   imagesEl.src = massImg.url;
//   imagesEl.alt = massImg.alt;
//   imagesEl.width = 300;
//   imagesEl.height = 200;
//   imagesEl.classList.add('site-img');

//   itemEl.appendChild(imagesEl);

//   return itemEl;
// });

// ulGallery.append(...elementsImg);


//или перебираем масив через функцию
// const ulGallery = document.querySelector('.gallery');
// const imagesOptions = options => {
//   return options.map(massImg => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('site-item');

//     const imagesEl = document.createElement('img');
//     imagesEl.src = massImg.url;
//     imagesEl.alt = massImg.alt;
//     imagesEl.width = 300;
//     imagesEl.height = 200;
//     imagesEl.classList.add('site-img');

//     itemEl.appendChild(imagesEl);

//     return itemEl;
//   });
// };
// const elementsImg = imagesOptions(images);
// ulGallery.append(...elementsImg);

