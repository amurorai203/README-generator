// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

// Define Installation for TOC
  var installationSection = `<a name= "installation"></a>
## Installation
\n${data.installation}\n
  
  
`;
// Define Usage for TOC
  var usageSection = `<a name= "usage"></a>
## Usage
\n${data.usage}\n
  
  
`;
// Define Contributing for TOC
  var contributionSection = `<a name= "contributing"></a>
## Contributing
\n${data.contributing}\n
  
  
`;
// Define Tests for TOC
  var testSection = `<a name= "tests"></a>
## Tests
\n${data.tests}\n
  
  
`;
// Define Questions and License for TOC
  var footerSection = `<a name= "questions"></a>
## Questions
\n${data.title} was originally written by ${data.questionEmail}. You can reach him at ${data.questionName} on Github.
  
  
<a name= "license"></a>
## License
\n${data.license}\n
  
`;

// Define string to hold the working contents
  var returnString =  `# ${data.title}

# Description\n
${data.description}

## Table of Contents\n
`;

// Add TOC items if string is not empty
if (data.installation !== ''){
  returnString = returnString + `*[Installation](#installation)\n
`;
}
if (data.usage !== ''){
  returnString = returnString + `*[Usage](#usage)\n
`;
}
if (data.contributing !== ''){
  returnString = returnString + `*[Contributing](#contributing)\n
`;
}
if (data.tests != ''){
  returnString = returnString + `*[Tests](#tests)\n
`;
}

returnString = returnString + `
*[Questions](#questions)\n
*[License](#license)\n

`;

// Add sections if they are not empty
if (data.installation !== '') {
  returnString = returnString + installationSection;
}

if (data.usage !== ''){
  returnString = returnString + usageSection;
}

if (data.contributing != ''){
  returnString = returnString + contributionSection;
}

if (data.tests !== ''){
  returnString = returnString + testSection;
}

returnString = returnString + footerSection;
// console.log(returnString);
  return returnString;
  
}

module.exports = generateMarkdown;
