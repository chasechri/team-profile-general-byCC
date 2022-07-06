const inquirer = require("inquirer");

const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamProfs = [];

const promptManager = (managerData) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ])
    .then((managerData) => {
      console.log(managerData);
      const manager = new Manager(
        managerData.name,
        managerData.employeeId,
        managerData.email,
        managerData.officeNumber
      );
      teamProfs.push(manager);
      promptIoE();
    });
};

const promptIoE = (newMemberData) => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "engoint",
        message:
          "Would you like to add and engineer or interern or finish building your team?",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then((direction) => {
      switch (direction.engoint) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;
        case "Finish building team":
      }
    });
};

const promptEngineer = (engineerData) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineers name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineers Id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineers email?",
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the engineers github username?",
      },
    ])
    .then((engineerData) => {
      console.log(engineerData);
      const engineer = new Engineer(
        engineerData.engineerName,
        engineerData.engineerId,
        engineerData.engineerEmail,
        engineerData.gitHub
      );
      teamProfs.push(engineer);
      promptIoE();
    });
};

const promptIntern = (internData) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the interns name?",
      },
      {
        type: "input",
        name: "internId",
        message: "Whats is the interns ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the interns email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern go to?",
      },
    ])
    .then((internData) => {
      console.log(internData);
      const intern = new Intern(
        internData.internName,
        internData.internId,
        internData.internEmail,
        internData.school
      );
      teamProfs.push(intern);
      promptIoE();
    });
};

promptManager();
