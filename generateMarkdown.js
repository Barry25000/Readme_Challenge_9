// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}


// Function to generate markdown for README
function generateMarkdown(data) {
    
  return `
# Title of Project ${data.title}

${data.license == 'None' ? '' : `![${data.license}](https://img.shields.io/badge/license-${data.license}-green)`}


## Description
${data.description}



## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: <br>
${data.instructions}



## Usage
${data.usage}


## License
This project is licensed under. <br>
${data.license}

${data.license == 'None' ? '' : `(https://opensource.org/license/${data.license}/`}

  
## Contributing
${data.contribution}


## Tests
To run tests, run the following command: <br>
${data.test}


## Questions
Please direct any questions to.<br>
${data.contribution} at ${data.email}  <br>
[GitHub](https://github.com/${data.gitHub})
`;


}


module.exports = generateMarkdown;