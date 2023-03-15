let myPasswords = []
const generateBtn = document.getElementById('generate-btn');
let outputEl = document.getElementById('output-el');
let inputEl = document.getElementById('input-el');
let numberEl = document.getElementById('number-el');
const deleteBtn = document.getElementById('delete-btn');


const passwordsFromLocalStorage = JSON.parse(localStorage.getItem('myPasswords'));


//The if condition below is what actuall displays the password on the screen from localStorage
if (passwordsFromLocalStorage) {
    myPasswords = passwordsFromLocalStorage
    render(myPasswords);
}


//The function below displays the password on the screen
function render(passwords) {
    let listItems = '';
    for (let i = 0; i < passwords.length; i++){
       listItems += `
       <li>
          ${passwords[i]} 
       </li>`;
    }
    
    outputEl.innerHTML = listItems;
    
}




generateBtn.addEventListener('click', () => {
    
    let inputPassValue = (inputEl.value).substring(0,((numberEl.value)/2)) //returns a part of the user's input starting from position 0
 
   
   /** The function below takes length as parameter 
    * And generates random characters from the chars strings 
    * Random characters makes passwords difficult to guess/Hack!
    */
    function makechar(length) {
    let result = '';
    let chars = '0AB1CD2EF3GH4IJ5KL6MN7OP8QR9ST0UV1WX2YZ3ab4cd5ef6gh7ij8kl9mn0op1qr2st3uv4wx5!@6#$7%^8&*9()0_+1=-2?/3><4.,5`~6{}7[]8\|.9';
    let counter = 0;
  while (counter < length) {
      result += chars.charAt(Math.floor(Math.random() * chars.length)) 
      counter++;
    }
  return result;
}
   //calling the function makechar and passing in half of the user's password length as argument
   let randomchar = `Password to ${inputEl.value}: ` + makechar((numberEl.value)/ 2) + inputPassValue ;

  myPasswords.push(randomchar)
  console.log(myPasswords);
  inputEl.value = ''
  numberEl.value = ''

  localStorage.setItem('myPasswords',JSON.stringify(myPasswords))
  console.log(localStorage.getItem('myPasswords'))
  render(myPasswords);
  

})


deleteBtn.addEventListener('dblclick', () => {
    console.log('double clicked')
    localStorage.clear();
    myPasswords = [];
    render(myPasswords);
})