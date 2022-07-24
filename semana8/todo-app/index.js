import express, { request, response, text } from "express";
const app =  express()
const todoListArray = []


app.use(express.urlencoded())

app.get("/", (request, response) => {

    response.json({
        message: 'Probando servidor express',
    });
});
app.post("/task", (request, response) => {

    const task = {
        id: todoListArray.length + 1,
        text: request.body.task_text,
        status: "todo",
        created_at: new Date(),
    };

    todoListArray.push(task)

    response.json({
        object: todoListArray,
        message: 'ok',
    });
});

app.listen(6002, () =>
console.log("El servidor inicio en el puerto http://localhost:6002")
);