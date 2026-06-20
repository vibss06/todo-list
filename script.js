const inp = document.querySelector('input');
const add = document.querySelector('.add');
const todo = document.querySelector('.todolist');

let editTask = null;

add.addEventListener('click',()=>{
    const value = inp.value;
    if(value.trim() === "") return;
    if(editTask){

        editTask.textContent = value;
        editTask = null;
        add.textContent = "Add";
        inp.value = "";
        return;
    }

    
    todo.innerHTML += `
    <div class="li">
        <h3>${value}</h3>
        <div class="btns">
            <button class="edit">
                Edit
            </button>

            <button class="delete" style="background-color:darkred;">  
            Delete
            </button>
        </div>
    </div>
    
    `;
    inp.value = "";
});

todo.addEventListener('click',(e)=>{

    if(e.target.classList.contains('delete')){
        const task =
        e.target.parentElement.parentElement;
        task.remove();
    }

    if(e.target.classList.contains('edit')){
        const taskText =
        e.target.parentElement.previousElementSibling;
        inp.value = taskText.textContent;
        editTask = taskText;
        add.textContent = "Update";
    }
});