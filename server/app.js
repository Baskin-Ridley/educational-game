const express = require('express');
const cors = require('cors');
const logger = require("./logger");
let questions= require("./questions");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);


app.get('/', (req, res) => {
    res.send(`Welcome to the questions API! There are ${questions.length} questions available.`);
})

app.get('/questions', (req, res) => {
    const { category } = req.query;
    if (category) {
        res.json(questions.filter(q => q["category"] === category));
    } else {
        res.json(questions);
    }
})

app.get('/questions/random', (req, res) => {
    const rand = Math.floor(Math.random() * questions.length);
    res.send(questions[rand]);
})

app.get('/questions/:id', (req, res) => {
    const id = req.params.id;
    const question = questions.filter(q => q["id"] == id)[0];

    if (question) {
        res.json(question);
    } else {
        res.sendStatus(404);
    }
})

// If client tries to set an ID, let them do so as long as it's not in use. 
// Otherwise find the smallest ID that isn't in use and set that
app.post("/questions", (req, res) => {
    const newQ = req.body;
    if(!newQ["id"]){
        newQ["id"] = pickID(questions.length+1);
        questions.push(newQ);
        res.status(201).send(newQ);
    } else {
        const check = questions.findIndex(x=>x["id"]==newQ["id"]);
        if(check==-1){
            questions.push(newQ);
            res.status(201).send(newQ);
        } else {
            res.status(400).send("That id is already in use.")
        }
    }
})

function pickID(id) {
    let idExists = true;
    let tryID = id;
    while(idExists) {
        if (questions.findIndex(x=>x["id"]==tryID)==-1){
            idExists = false;
            return tryID;
        }
        tryID++;
    }
}

app.delete("/questions/:id", (req, res) => {
    const id = req.params["id"];

    const exists = questions.filter(q => q["id"] == id).length == 1;
    if (exists) {
        questions = questions.filter(q => q["id"] != id);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
})

app.patch("/questions/:id", (req, res) => {
    const id = req.params["id"];
    const changes = req.body;

    let QIndex = questions.findIndex(x => x.id == id);

    if (QIndex == -1) { res.sendStatus(404); return; };

    if (changes.question) { questions[QIndex].question = changes.question };
    if (changes.answers)  { questions[QIndex].answers  = changes.answers };
    if (changes.category) { questions[QIndex].category = changes.category };
    res.status(200).send(questions[QIndex]);

})

module.exports = app;
