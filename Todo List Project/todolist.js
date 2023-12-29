let todoList = [
  
  {
    item: 'Buy Milk', 
    dueDate: '4/10/2023'
  }
];
displayItems();
function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  console.log(todoItem);

  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');


  let newHtml = '';

  
  for (let i = 0; i < todoList.length; i++) {
    //let Item = todoList[i].item;
    //let dueDate = todoList[i].dueDate;
    //object destructuring
    let {item,dueDate} = todoList[i];
    newHtml+= `
    <div>
    <span>${Item}</span>
    <span>${dueDate}</span>
    <button onclick="todoList.splice(${i},1);
    displayItems();
    ">Delete</button>
    </div>
    `
    
  }
 containerElement.innerHTML = newHtml;

   
}