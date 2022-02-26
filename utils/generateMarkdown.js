const fs = require("fs");

// information for below licenses came from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const licenseArr = [
  {
    name: "MIT License",
    img: "License-MIT-yellow.svg",
    url: "MIT",
  },
  {
    name: "Apache License 2.0",
    img: "License-Apache_2.0-blue.svg",
    url: "Apache-2.0",
  },
  {
    name: "GNU General Public License (GPL) v3",
    img: "License-GPLv3-blue.svg",
    url: "gpl-3.0",
  },
  {
    name: "Berkeley Software Distribution (BSD) 3-Clause License",
    img: "License-BSD_3--Clause-blue.svg",
    url: "BSD-3-Clause",
  },
  {
    name: "Internet Systems Consortium License (ISC)",
    img: "License-ISC-blue.svg",
    url: "ISC",
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    for (i = 0; i < licenseArr.length; i++) {
      const chosenLicense = licenseArr[i];
      if (license === chosenLicense.name) {
        return `
[![License](https://img.shields.io/badge/${chosenLicense.img})](https://opensource.org/licenses/${chosenLicense.url})`;
      }
    }
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](#license) <br />`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    for (i = 0; i < licenseArr.length; i++) {
      const licenseName = licenseArr[i].name;
      if (license === licenseName) {
        return `## License

      This project is covered under the ${licenseName}.`;
      }
    }
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**
  ${renderLicenseBadge(data.license)}
  ## Description

        ${data.description}
  ## Table of Contents
  [Installation](#installation) <br /> [Usage](#usage) <br /> ${renderLicenseLink(
    data.license
  )}[Contributing](#contributing) <br /> [Tests](#tests) <br /> [Questions](#questions)

  ## Installation

        ${data.installation}
  ## Usage

        ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing

        ${data.contribution}
  ## Tests

        ${data.test}
  ## Questions

  If any additional questions arise, you can find me at [GitHub](https://github.com/${
    data.github
  }) or email me at ${data.email}.

`;
}

module.exports = generateMarkdown;
