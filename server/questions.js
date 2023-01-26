const questions = [
{
    "id": 1,
    "question": "Pick the next number in the sequence: 1, 2, 4, 8, ...",
    "answers": [
        {
            "text": "15",
            "correct": false
        },
        {
            "text": "32",
            "correct": false
        },
        {
            "text": "16",
            "correct": true
        },
        {
            "text": "4",
            "correct": false
        }
    ],
    "category": "Mathematics"
},
{
    "id": 2,
    "question": "Which of the following are Fibonacci numbers?",
    "answers": [
        {
            "text": "1",
            "correct": true
        },
        {
            "text": "4",
            "correct": false
        },
        {
            "text": "5",
            "correct": true
        },
        {
            "text": "15",
            "correct": false
        }
    ],
    "category": "Mathematics"
},
{
    "id": 3,
    "question": "Which of the following numbers are irrational?",
    "answers": [
        {
            "text": "Eleventy-one",
            "correct": false
        },
        {
            "text": "Pi",
            "correct": true
        },
        {
            "text": "Euler's constant",
            "correct": true
        },
        {
            "text": "The square root of 30.25",
            "correct": false
        }
    ],
    "category": "Mathematics"
},
{
    "id": 4,
    "question": "Which of the following mathematicians invented calculus?",
    "answers": [
        {
            "text": "Leonhard Euler",
            "correct": false
        },
        {
            "text": "Isaac Newton",
            "correct": true
        },
        {
            "text": "Gottfried Wilhelm Leibniz",
            "correct": true
        },
        {
            "text": "Carl Friedrich Gauss",
            "correct": false
        }
    ],
    "category": "Mathematics"
},
{
    "id": 5,
    "question": "How many platonic solids are there?",
    "answers": [
        {
            "text": "48",
            "correct": false
        },
        {
            "text": "5",
            "correct": true
        },
        {
            "text": "0",
            "correct": false
        },
        {
            "text": "12",
            "correct": false
        }
    ],
    "category": "Mathematics"
},
{
    "id": 6,
    "question": "Which is the most abuntant element in the universe?",
    "answers": [
        {
            "text": "Oxygen",
            "correct": false
        },
        {
            "text": "Carbon",
            "correct": false
        },
        {
            "text": "Fire",
            "correct": false
        },
        {
            "text": "Hydrogen",
            "correct": true
        }
    ],
    "category": "Science"
},
{
    "id": 7,
    "question": "Which of the following are noble gases?",
    "answers": [
        {
            "text": "Hydrogen",
            "correct": false
        },
        {
            "text": "Oxygen",
            "correct": false
        },
        {
            "text": "Argon",
            "correct": true
        },
        {
            "text": "Neon",
            "correct": true
        }
    ],
    "category": "Science"
},
{
    "id": 8,
    "question": "What is the study of mushrooms called?",
    "answers": [
        {
            "text": "Mycology",
            "correct": true
        },
        {
            "text": "Lepidopterology",
            "correct": false
        },
        {
            "text": "Astronomy",
            "correct": false
        },
        {
            "text": "Fungology",
            "correct": false
        }
    ],
    "category": "Science"
},
{
    "id": 9,
    "question": "What is the term for when light bends through a substance?",
    "answers": [
        {
            "text": "Reflection",
            "correct": false
        },
        {
            "text": "Light doesn't bend",
            "correct": false
        },
        {
            "text": "Refraction",
            "correct": true
        },
        {
            "text": "Dispersion",
            "correct": false
        }
    ],
    "category": "Science"
},
{
    "id": 10,
    "question": "What type of bond involves the sharing of electron pairs between different atoms?",
    "answers": [
        {
            "text": "Ionic",
            "correct": false
        },
        {
            "text": "Metallic",
            "correct": false
        },
        {
            "text": "Molecular",
            "correct": false
        },
        {
            "text": "Covalent",
            "correct": true
        }
    ],
    "category": "Science"
},
{
    "id": 11,
    "question": "Which of the following words describes the act of throwing someone out of a window?",
    "answers": [
        {
            "text": "Defenestration",
            "correct": true
        },
        {
            "text": "Decapitation",
            "correct": false
        },
        {
            "text": "Deregulation",
            "correct": false
        },
        {
            "text": "Demonstration",
            "correct": false
        }
    ],
    "category": "English"
},
{
    "id": 12,
    "question": "During which century was John Milton’s Paradise Lost written?",
    "answers": [
        {
            "text": "9th",
            "correct": false
        },
        {
            "text": "16th",
            "correct": false
        },
        {
            "text": "20th",
            "correct": false
        },
        {
            "text": "18th",
            "correct": true
        }
    ],
    "category": "English"
},
{
    "id": 13,
    "question": "What novel written by Oscar Wilde has to do with immortality?",
    "answers": [
        {
            "text": "The Fisherman and His Soul",
            "correct": false
        },
        {
            "text": "The Canterville Ghost",
            "correct": false
        },
        {
            "text": "The Picture of Dorian Gray",
            "correct": true
        },
        {
            "text": "The Devoted Friend",
            "correct": false
        }
    ],
    "category": "English"
},
{
    "id": 14,
    "question": "Which character in Herman Melville’s Moby Dick was the voice of reason?",
    "answers": [
        {
            "text": "Starbuck",
            "correct": true
        },
        {
            "text": "Ishmael",
            "correct": false
        },
        {
            "text": "Captain Ahab",
            "correct": false
        },
        {
            "text": "Peleg",
            "correct": false
        }
    ],
    "category": "English"
},
{
    "id": 15,
    "question": "According to Emily Dickinson, Hope is:",
    "answers": [
        {
            "text": "A waking dream",
            "correct": false
        },
        {
            "text": "The thing with feathers",
            "correct": true
        },
        {
            "text": "The worst of all evils",
            "correct": false
        },
        {
            "text": "The pillar that holds up the world",
            "correct": false
        }
    ],
    "category": "English"
},
{
    "id": 16,
    "question": "The Trưng sisters led a rebellion in which nation?",
    "answers": [
        {
            "text": "Vietnam",
            "correct": true
        },
        {
            "text": "Taiwan",
            "correct": false
        },
        {
            "text": "Tibet",
            "correct": false
        },
        {
            "text": "Mongolia",
            "correct": false
        }
    ],
    "category": "History"
},
{
    "id": 17,
    "question": "Miyamoto Musashi famously won a duel with which unconventional weapon?",
    "answers": [
        {
            "text": "A laundry pole",
            "correct": false
        },
        {
            "text": "An oar",
            "correct": true
        },
        {
            "text": "A scabbard",
            "correct": false
        },
        {
            "text": "A lead pipe",
            "correct": false
        }
    ],
    "category": "History"
},
{
    "id": 18,
    "question": "Who is the wealthiest person to have ever lived?",
    "answers": [
        {
            "text": "Emperor Shenzong",
            "correct": false
        },
        {
            "text": "Augustus Caeser",
            "correct": false
        },
        {
            "text": "Mansa Musa",
            "correct": true
        },
        {
            "text": "Jeff Bezos",
            "correct": false
        }
    ],
    "category": "History"
},
{
    "id": 19,
    "question": "Australia lost the...",
    "answers": [
        {
            "text": "Vietnam War",
            "correct": true
        },
        {
            "text": "Seven Years' War",
            "correct": false
        },
        {
            "text": "Korean War",
            "correct": false
        },
        {
            "text": "Great Emu War",
            "correct": true
        }
    ],
    "category": "History"
},
{
    "id": 20,
    "question": "In which year did the Great Fire of London occur?",
    "answers": [
        {
            "text": "1997",
            "correct": false
        },
        {
            "text": "1666",
            "correct": true
        },
        {
            "text": "1776",
            "correct": false
        },
        {
            "text": "1567",
            "correct": false
        }
    ],
    "category": "History",
},
{
    "id": 21,
    "question": "CERN launched the first website in which year?",
    "answers": [
        {
            "text": "1986",
            "correct": false
        },
        {
            "text": "1996",
            "correct": false
        },
        {
            "text": "1981",
            "correct": false
        },
        {
            "text": "1991",
            "correct": true
        }
    ],
    "category": "Computer Science"
},
{
    "id": 22,
    "question": "Who wrote the first computer program?",
    "answers": [
        {
            "text": "Ada Lovelace",
            "correct": true
        },
        {
            "text": "Alan Turing",
            "correct": false
        },
        {
            "text": "Charles Babbage",
            "correct": false
        },
        {
            "text": "Grace Hopper",
            "correct": false
        }
    ],
    "category": "Computer Science"
},
{
    "id": 23,
    "question": "Who invented Linux?",
    "answers": [
        {
            "text": "Bjarne Stroustrup",
            "correct": false
        },
        {
            "text": "Linus Torvalds",
            "correct": true
        },
        {
            "text": "Guido van Rossum",
            "correct": false
        },
        {
            "text": "Dennis Ritchie",
            "correct": false
        }
    ],
    "category": "Computer Science"
},
{
    "id": 24,
    "question": "Alan Turing proved that which problem was undecidable?",
    "answers": [
        {
            "text": "The Mortal Matrix Problem",
            "correct": false
        },
        {
            "text": "The Travelling Salesman Problem",
            "correct": false
        },
        {
            "text": "The Halting Problem",
            "correct": true
        },
        {
            "text": "Hilbert's Tenth Problem",
            "correct": false
        }
    ],
    "category": "Computer Science"
},
{
    "id": 25,
    "question": "Which of these sorting algorithms is the fastest?",
    "answers": [
        {
            "text": "Bogosort",
            "correct": false
        },
        {
            "text": "Revised Bubble sort",
            "correct": false
        },
        {
            "text": "Quick sort",
            "correct": false
        },
        {
            "text": "Merge sort",
            "correct": true
        }
    ],
    "category": "Computer Science"
}
];

module.exports = questions;


/* 
{
    "id": ,
    "question": "",
    "answers": [
        {"text": "", "correct": true},
        {"text": "", "correct": false},
        {"text": "", "correct": false},
        {"text": "", "correct": false}
    ],
    "category": ""
} 
*/