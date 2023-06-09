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
        choices: ['none', 'Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2 -Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License', 'Creative Commons Zera v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v2.1', 'Mozzila Public License 2.0', 'The Unlicense'],
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
        err ? console.log(err) : console.log('success');
    })
    
  })



//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

}







// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// Function call to initialize app
init();
