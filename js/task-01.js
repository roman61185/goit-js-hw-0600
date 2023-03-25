

const nums = document.querySelectorAll('.item');
console.log('Number of categories:', nums.length);





nums.forEach((ell) => {
    // console.log(ell);
    const titleEll = ell.querySelector('h2').textContent;
    const elements = ell.querySelectorAll('li').length;
    console.log('Category:', titleEll);
    console.log('Elements:', elements)
});



