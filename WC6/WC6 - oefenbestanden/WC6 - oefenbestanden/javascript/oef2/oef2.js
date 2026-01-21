
/*let pizza = document.getElementById('two')

function wijzig1 (pizza){
pizza.textContent ='lasagne'
pizza.style.border = '1px solid red';
}

wijzig1(pizza)*/

let hot = document.getElementsByClassName('hot')
let cold = document.getElementsByClassName('cold')
/*function wijzig2() {
  let item = document.getElementsByClassName('hot')[0];
  item.classList.remove('hot');
  item.classList.add('cold');
}

wijzig2();*/

function wijzig2() {
  let hotItems = document.getElementsByClassName('hot');
  hotItems[0].classList.replace('hot', 'cold');
}

wijzig2();

