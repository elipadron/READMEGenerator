

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return '';
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    return '';
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    return '';
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(data) {
    const { title, description, license, githubUsername } = data;

    const tableOfContents = `
  ## Table of Contents
    
  - [Description](#description)
  - [License](#license)
  - [Installation] (#installation)
  - [Questions](#questions)Í
  `;


    return `# ${title}
  
  ${renderLicenseBadge(license)}


  ${tableOfContents}
  
  ## Description
  ${description}

  ##Questions
  
  ${renderLicenseSection(license)}
  
  `;
  }
  
  module.exports = generateMarkdown;
  