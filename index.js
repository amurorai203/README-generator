const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const outputFile = "README.md"

// array of questions for user
const questions = [
{
    type: 'input',
    name: 'title',
    message: "Title of the project: ",
},
{
    type: 'input',
    name: 'description',
    message: "Description of the project: ",
},
{
    type: 'input',
    name: 'installation',
    message: "Installation Dependencies: ",
},
{
    type: 'input',
    name: 'usage',
    message: "Usage: ",
},
{
    type: 'list',
    name: 'license',
    message: "License: ",
    choices: [
        {
            key: 'M',
            name: 'MIT',
            value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        },
        {
            key: 'A',
            name: 'APACHE 2.0',
            value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        },
        {
            key: 'G',
            name: 'GLP 3.0',
            value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        },
        {
            key: 'B',
            name: 'BSD 3',
            value: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        },
        {
            key: 'N',
            name: 'None',
            value: 'None'
        }
    ],
        default: 'MIT'
},
{
    type: 'input',
    name: 'contributing',
    message: "Contributing: ",
},
{
    type: 'input',
    name: 'tests',
    message: "Tests: ",
},
{
    type: 'input',
    name: 'questionName',
    message: "Questions(Github username): "
},
{
    type: 'input',
    name: 'questionEmail',
    message: "Questions(email address): "
}
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, (err) => {
        if (err) console.log(err);
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        let htmlString = generateMarkdown(answers);
        console.log(htmlString);
        writeToFile(outputFile, htmlString);
    })
    .then(() => console.log("Done"))
    .catch((err) => console.error(err));

};

// function call to initialize program
init();
