let num = document.querySelector('#num').value;
let res = document.querySelector('.result')

  function evenodd(num) {
  if (num % 2 == 0){
    res.innerText='The number is Even.';
    
  }
  else{
    res.innerText='The number is Odd.';
  }
}

