const task = document.querySelector("#list-task")
const inputText = document.querySelector("#input_newtask")
const button = document.querySelector("#btn-add")

button.onclick = () =>{
    task.innerHTML+=`
         <p class="task">
            <input type="checkbox" name="" id="">
            <span>${inputText.value}</span>
             <a href="#"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/cross-mark_274c.png" alt=""></a>
        </p>   
     `;
     inputText.value=""
}


/**class task */
class Task{
    constructor(){
        this.id = '_' + Math.random().toString(36).slice(2)
        this.text = _text
        this.status = 'todo'
        this.created_at = new Date()
        this.done_at = null
        this.deleted_at = null
    }
    done(){
        this.status = 'done'
        this.done_at = new Date()
    }
    delete(){
        this.status = 'delete'
        this.deleted_at = new Date()
    }

    createNode(){
        const element = document.createElement('p')
        element.setAttribute('id', this.id)
        element.setAttribute('class', 'task')
        element.innerHTML = `
            <input type="checkbox">
            <span>${this.text}</span>
            <a href="#"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/cross-mark_274c.png" alt=""></a>
        `
    }
}
const arrayTasks = []

const addTask = () =>{
    if(inputText.value == ""){
        alert("Ingresa un texto para la tarea.")
        return
    }
    const task = new Task(inputText.value)
    arrayTasks.push(task)
    document.getElementsByClassName('form')[0].before(task.createNode)
    inputText.value = ""
    inputText.focus()
}