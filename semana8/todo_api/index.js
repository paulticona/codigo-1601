import express, { request, response } from "express";

const app =  express()
// Esto esta creando la ruta en la raiz y luego vamos a recibir 2
//* request (recibimos) => Es la informacion que vamos recibir de quien haga la peticion
//* response (respondemos) => Es lo que vamos a responder al usuario

//esto hace que node entienda lo que cliente envia
app.use(express.json())

//arra vacio
const todoListArray = []

app.get("/", (request, response) => {
    // vamos a responder que cuando el usuario entre a la raiz esta respuesta
    // sea un json


    response.json({
        message: 'hola adri',
        total: todoListArray.length,
        task: todoListArray,
    });
});
  
app.post("/create-task", (request, response)=>{

    const task = request.body
    task.created_at = new Date()
    task.id = todoListArray.length + 1

    todoListArray.push(task)

    response.json({
        task
    })
})

app.put("/update-task/:id", (req, res)=>{
    //params
    const id = req.params.id
    // lo que el cliente envie estara en le void
    const data = req.body
    //buscar la tarea
    const task = todoListArray.find((todoTask)=> todoTask.id === Number(id))
    task = {
        ...task,
        ...data,
    }
    
})


// Para poder ver esto desde un navegador vamos a habilitar un puerto
// de nuestro pc

app.listen(6001, () =>
console.log("El servidor inicio en el puerto http://localhost:6001")
);