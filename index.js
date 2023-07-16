// prompt about what svg looks likes
var answers = []; 
const userResponses = (''); 
const userInfo = (''); 
// const inquirerResponse = (''); 
// const data = (''); 

// = [
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./Utils/generateMarkdown'); 

// ];

// TODO: Create an array of questions for user input
questions = [
    {
        type: 'input',
        message: 'What color do you want your shape?',
        choices: [], 
        name: 'color',
    },

    {
        type: 'input',
        message: 'What type shape do you want?',
        choices: ['circle', 'triangle', 'square'], 
        name: 'shape'
    },
    
    {
        type: 'input',
        message: 'What three characters would you like?',
        name: 'characters'
    },
    
    {
        type: 'list',
        message: 'What text color woudl you like?',
        choices: [],
        name: 'text', 
    
    },
    
]

// if/else statements for choices above ADD HERE

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data);
}

function init() {
    inquirer
    .prompt(questions)
    .then((inquirerResponse) => {
        console.log(inquirerResponse); 
        console.log("making readme"); 
        writeToFile(`${inquirerResponse.fileName}.md`, generateMarkdown(inquirerResponse))
    })
    .catch((err) => {
        console.log(err); 
    });
}


init();
