// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data, license) {
    const badges = {
        none: "",
        GNU:'[![License: GNU](https://img.shields.io/badge/License-GNUGPLV3-Green.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        MIT:'[![license: MIT](https://img.shields.io/badge/License-MIT-Green.svg)](https://opensource.org/license/mit/)',
        BSD:'[![license: BSD](https://img.shields.io/badge/License-BSD-Green.svg)](https://opensource.org/license/bsd-3-clause/)'
    }
    return badges(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}


// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# Title of Project ${data.title}


${this.renderLicenseBadge(data.license)}

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
Licensed under the following licensing. <br>
${data.license}

  
## Contributing
${data.contribution}


## Tests
To run tests, run the following command: <br>
${data.test}


## Questions
Please direct any questions to.<br>
email: ${data.email} <br>
GitHub: ${data.gitHub}
`;


}


module.exports = generateMarkdown;
