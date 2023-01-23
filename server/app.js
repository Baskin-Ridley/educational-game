const express = require('express');
const cors = require('cors');
const logger = require("./logger");
const questions = require("./questions"); 

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);


app.get('/', (req, res) => {
    res.send(`Welcome to the questions API! There are ${questions.length} questions available.`);
})

app.get('/questions', (req, res) => {
    res.json(questions);
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

    questions.push(newQ);

    res.status(201).send(newQ);
})

module.exports = app;