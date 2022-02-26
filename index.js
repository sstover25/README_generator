const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project? (Required)",
    validate: (projectNameInput) => {
      if (projectNameInput) {
        return true;
      } else {
        console.log("Please enter your project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project. (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please enter the installation instructions for your project. (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter installation instructions for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage information for your project. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the usage information for your project!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicense",
    message: "Would you like to select a license for this project?",
    default: false,
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license for your project.",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License (GPL) v3",
      "Berkeley Software Distribution (BSD) 3-Clause License",
      "Internet Systems Consortium License (ISC)",
    ],
    when: ({ confirmLicense }) => {
      if (confirmLicense) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Please enter the contribution guidelines for your project. (Required)",
    validate: (constibutionInput) => {
      if (constibutionInput) {
        return true;
      } else {
        console.log(
          "Please enter the contribution guidelines for your project!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please enter the test instructions for your project. (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter the test instructions for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message:
      "What is the email that others can use to reach out to you with questions?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "README created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((init) => {
    return generateMarkdown(init);
  })
  .then((answers) => {
    return writeToFile(answers);
  })
  .then((writeToFile) => {
    console.log(writeToFile.message);
  })
  .catch((err) => {
    console.log(err);
  });
