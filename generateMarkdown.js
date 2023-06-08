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

function getInfo (){
    inquirer
  .prompt([
    {
        type: 'Input',
        message: 'What is the title of the project?',
        name: 'title'    
    },
    {
        type: 'list',
        messgae: 'What license do you want to use?',
        choices: ['none', 'Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2 -Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License', 'Creative Commons Zera v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v2.1', 'Mozzila Public License 2.0', 'The Unlicense'],
        name: 'License'
    },
    {
        type: 'Input',
        message: 'What is the title of the project?',
        name: 'title'    
    },
    {
        type: 'Input',
        message: 'What is the title of the project?',
        name: 'title'    
    },
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
getInfo()


module.exports = generateMarkdown;
