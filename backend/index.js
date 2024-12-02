const express = require("express"); 
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);

    if(!parsedPayLoad.success) {
        res.status(411).json({
            msg: "Invalid Inputs"
        })

        return;
    }

    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })

})

app.get("/todos", async function(req, res) {
    //const todos = await todo.find({});

    res.json({
        todos: []
    })
})

app.put("/completed", async function(req, res) {
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);

    if(!parsedPayLoad.success) {
        res.status(411).json({
            msg: "Invalid Input"
        })

        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);