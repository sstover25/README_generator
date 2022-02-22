const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project-title",
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
    type: "list",
    name: "license",
    message: "Please select the license for your project.",
    choices: [],
    default: 0,
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
