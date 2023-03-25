const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = [];

ingredients.forEach((ingredient) => {
  //console.log(ingredient);
  const newLi1 = document.createElement('li');
  //console.log(newLi1);
  const text1 = document.createTextNode(ingredient);
  //console.log(text1);
  newLi1.appendChild(text1);
  //console.log(newLi1);
  newLi1.classList.toggle('item');
  console.log(newLi1);
  elements.push(newLi1);
});



const ul = document.querySelector("#ingredients");
ul.append(...elements);



