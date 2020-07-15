let todoList = [];


const addTodo = () => {
  let todo = document.getElementById("todoInput").value;

  let itemTodo = { contents: todo, complete: false };
  console.log(todoList)
    if (todo !== ""){
    todoList.push(itemTodo);
    render(todoList);
    document.getElementById("todoInput").value = "";
    numberOfTask ()
   }


};

const toggleDone = (index) => {
  todoList[index].complete = true;
  console.log(todoList);
  numberOfTask ();
  render(todoList);}


const toggleUndone = (index) => {
  todoList[index].complete = false;
  console.log(todoList);
  numberOfTask ();
  render(todoList);}

function toggleRemove(index) {
  todoList.splice(index,1);
  console.log(todoList);
  numberOfTask ();
  render(todoList);
}


const render = (array) => {


  let todoHTML = array
    .map((item, index) => {
      if (item.complete == false) {
        return `<li class="item-style">${item.contents} <a onclick="toggleDone(${index})" href="#">Done</a> <a onclick="toggleRemove(${index})" href="#">Remove</a></li>`;
      } else {
        return `<li class="item-style item-style2" >${item.contents} <a onclick="toggleUndone(${index})" href="#">UnDone</a> <a onclick="toggleRemove(${index})" href="#">Remove</a></li>`;
      }
    })
    .join("");
  document.getElementById("resultArea").innerHTML = todoHTML;

};



function allButton() {
  render(todoList);
} 

function doneButton() {
   let filteredList = todoList.filter(item => item.complete == true);
   console.log(filteredList)
   render(filteredList);
}

function undoneButton() {
  let filteredList = todoList.filter(item => item.complete == false);
  console.log(filteredList)
  render(filteredList);
}



function numberOfTask () {
  donelength = todoList.filter(itemTodo => itemTodo.complete === true ).length
  undonelength = todoList.filter(itemTodo => itemTodo.complete === false ).length
  document.getElementById("showallbadge").innerHTML = `${donelength + undonelength}`;
  document.getElementById("showundonebadge").innerHTML = `${undonelength}`;
  document.getElementById("showdonebadge").innerHTML = `${donelength}`;
}

// numberOfTask ()
// render ();


function setupListeners() {
  const node = document.getElementById("todoInput");
  node.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });
}

setupListeners()