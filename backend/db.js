const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://{Username}:{Password}@cluster0.0xd4x.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}
