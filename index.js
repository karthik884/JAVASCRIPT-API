// for drag

const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let dragableTodo =  null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd)
});

function dragStart() {
  dragableTodo =  this;
  // console.log("dragStart");
}

function dragEnd() {
  dragableTodo =  null;
  console.log("dragEnd");
}


all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave",dragLeave);
  status.addEventListener("drop", dragDrop)
});

function dragOver(e) {
  e.preventDefault();
  // console.log("dragOver");
}
function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}
function dragLeave() {
  console.log("dragLeave");
  this.style.border = "none";
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(dragableTodo);
  console.log("dropped")
}

// add data

const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.querySelector("#overlay");

btns.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        document.querySelector(btn.dataset.targetModal).classList.add("active");
        overlay.classList.add("active");
    });
});


close_modals.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        // document.querySelector(btn.dataset.target)
        const model = btn.closest(".model");
        model.classList.remove("active");
        overlay.classList.remove("active");
    });
});


window.onclick = (event) => {
    if(event.target == overlay) {
        const models = document.querySelectorAll(".model");
        models.forEach((model) => model.classList.remove("active"));
        overlay.classList.remove("active");
    }
};


// todo function
const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  const txt = document.createTextNode(input_val);

  todo_div.append(txt);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable","true");

  // create span
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");

  span.appendChild(span_txt);

  todo_div.appendChild(span);

  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
  span.parentElement.style.display = "none";
  });
    
  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  todo_form.classList.remove("active");
  overlay.classList.remove("active");

  
}

const close_btns =  document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

