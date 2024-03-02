



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // TODO: Implement logic to return the appropriate license badge
    return '';
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    // TODO: Implement logic to return the appropriate license link
    return '';
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    // TODO: Implement logic to return the appropriate license section
    return '';
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(data) {
    const { title, description, license } = data;
  
    return `# ${title}
  
  ${renderLicenseBadge(license)}
  
  ## Description
  ${description}
  
  ${renderLicenseSection(license)}
  
  `;
  }
  
  module.exports = generateMarkdown;
  