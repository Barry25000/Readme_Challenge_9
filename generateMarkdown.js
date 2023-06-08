const inquirer = require('inquirer');
const fs = require('fs');
// const { default: prompt } = require('inquirer/lib/ui/prompt');
// const { default: InputPrompt } = require('inquirer/lib/prompts/input');
// const { default: Prompt } = require('inquirer/lib/prompts/base');
// const { default: ListPrompt } = require('inquirer/lib/prompts/list');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

function getTitle (){
    inquirer
  .prompt([
    {
    type: 'Input',
    message: 'What is your title of the project',
    name: 'title'    
    },
    {
    type: 'list',
                messgae: 'What license do you want to use?',
                choices: ['none', 'Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2 -Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License', 'Creative Commons Zera v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v2.1', 'Mozzila Public License 2.0', 'The Unlicense'],
                name: 'License'
    }
])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

}
getTitle()


module.exports = generateMarkdown;
