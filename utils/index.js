
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your github username?',
  },

  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'dependencies',
    message: 'What dependencies need to be installed?',
  },

];

function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

async function init() {
  try {
    const userInput = await inquirer.prompt(questions);

    const readmeContent = generateMarkdown(userInput);

    await writeToFile('README.md', readmeContent);

    console.log('README.md successfully generated!');
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

init();



