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
  return `
  # Title 
  ${data.title}


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

To install necessary dependencies, run the following command: ${data.instructions}



## Usage
${data.usage}


## License
${data.license}

  
## Contributing
${data.contribution}


## Tests
To run tests, run the following command: ${data.test}


## Questions
Please direct any questions to.<br>
email: ${data.email} <br>
GitHub: ${data.gitHub}
`;


}

module.exports = generateMarkdown;
