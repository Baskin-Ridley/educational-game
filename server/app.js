const express = require('express');
const cors = require('cors');
const logger = require("./logger");
let {questions, nextId} = require("./questions"); 

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);


app.get('/', (req, res) => {
    res.send(`Welcome to the questions API! There are ${questions.length} questions available.`);
})

app.get('/questions', (req, res) => {
    const {category} = req.query;
    if (category) {
        res.json(questions.filter(q => q["category"] === category));
    } else {
        res.json(questions);
    }
})

app.get('/questions/random', (req, res) => {
    const rand = Math.floor(Math.random()*questions.length);
    res.send(questions[rand]);
})

app.get('/questions/:id', (req, res) => {
    const id = req.params.id;
    const question = questions.filter(q => q["id"] == id)[0];

    if(question) {
        res.json(question);
    } else {
        res.status(404).json({
            error: "No such question!"
        });
    }
})

app.post("/questions", (req, res) => {
    const newQ = req.body; 
    newQ["id"] = nextId;
    nextId++;

    questions.push(newQ);

    res.status(201).send(newQ);
})

app.delete("/questions/:id", (req, res)=>{
    const id = req.params["id"];

    const exists = questions.filter(q => q["id"] == id).length==1;
    if(exists) {
        questions = questions.filter(q=>q["id"]!=id);
        res.sendStatus(204);
    } else {
        res.status(404).json({
            error: "No such question!"
        });
    }
})

/*
update
*/

module.exports = app;