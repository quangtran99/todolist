let todoList = [];
let mode = "all";

const addTodo = () => {
  let todo = document.getElementById("todoInput").value;

  let itemTodo = { contents: todo, complete: false };
  console.log(todoList)

  // if (document.getElementById("todoInput").value = "") {
  //   return  ;
  // } else {
    todoList.push(itemTodo);
    render(mode);
    document.getElementById("todoInput").value = "";
  // }


};

const toggleDone = (index) => {
  todoList[index].complete = true;
  console.log(todoList);
  numberOfTask ();
  render(mode);}


const toggleUndone = (index) => {
  todoList[index].complete = false;
  console.log(todoList);
  numberOfTask ();
  render(mode);}

function toggleRemove(index) {
  todoList.splice(index,1);
  console.log(todoList);
  numberOfTask ();
  render(mode);
}


const render = (mode) => {


  let todoHTML = todoList
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


function handleChangeMode (newmode) {
  mode = newmode;
  render(mode);
}

function activeButton (button) {
  const listVariable = ["showundonebutton", "showallbutton", "showdonebutton"];
  listVariable.map(variable => {
    if (variable === button) {
      document.getElementById(variable).classList.add("active");
    } else {
      document.getElementById(variable).classList.remove("active");
    }
  });
}

function numberOfTask () {
  donelength = todoList.filter(itemTodo => itemTodo.complete === true ).length
  undonelength = todoList.filter(itemTodo => itemTodo.complete === false ).length
  document.getElementById("showallbadge").innerHTML = `${donelength + undonelength}`;
  document.getElementById("showundonebadge").innerHTML = `${undonelength}`;
  document.getElementById("showdonebadge").innerHTML = `${donelength}`;
}

numberOfTask ()
render (mode);