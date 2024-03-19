//form jab bhi submit hota hai yah toh post && get form mein submit hoga lekin jab bhi submit hota hai toh woh url mein yah server p chalee jaati hai

//parseInt string ko integer mein convert karta hai

const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
 e.preventDefault();

 const height= parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 const result = document.querySelector('#result');

 if(height ==='' || height < 0 || isNaN(height)) {
 result.innerHTML = 'Please give valid inputs ${height}';
 }
 else if(weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give valid inputs ${weight}`;
 } else {
    const bmi = (weight/ ((height*height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`
}

});