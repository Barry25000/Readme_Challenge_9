const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


function init (){
    inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'    
    },
    {
        type: 'list',
        messgae: 'What license do you want to use?',
        choices: ['none', 'GNU', 'MIT', 'BSD'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please give a brief description of the project?',
        name: 'description'    
    },
    {
        type: 'input',
        message: 'Are there any relevant installation instructions?',
        name: 'instructions'    
    },
    {
        type: 'input',
        message: 'What is the main use of this application?',
        name: 'usage'    
    },
    {
        type: 'input',
        message: 'Who contributed to the project?',
        name: 'contribution'    
    },
    {
        type: 'input',
        message: 'test instructions?',
        name: 'test'    
    },
    {
        type: 'input',
        message: 'What is your GitHub user ID?',
        name: 'gitHub'    
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'    
    },

])
  .then((answers) => {  //user feedback
    console.log(answers);
    fs.writeFile('README.md', generateMarkdown(answers), function (err){
        err ? console.log(err) : console.log('success! Readme.md file created and saved');
    })
    
  })
}


// Function call to initialize app
init();
