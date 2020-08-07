//alert('Siema!');

const firstName = 'Feliks';
const age = 21;

console.log('Siema!'); //Służy do opisywania stron lub błędów na niej w panelu programistycznym nie widocznym bezpośrednio na stronie
console.log(firstName);
console.log(age);
console.log(`Nazywam się ${firstName} i mam ${age} lat.`);
//

const heading = document.querySelector('.main-heading--js');

console.log(heading);

heading.innerHTML = `Nazywam się ${firstName} i mam ${age} lat.`;