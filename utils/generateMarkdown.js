// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  var returnString =  `# ${data.title}

# Description\n
${data.description}

## Table of Contents\n
*[Installation](#installation)\n
*[Usage](#usage)\n
*[License](#license)\n
*[Contributing](#contributing)\n
*[Tests](#tests)\n
*[Questions](#questions)\n\n

<a name= "installation"></a>
## Installation
\n${data.installation}\n


<a name= "usage"></a>
## Usage
\n${data.usage}\n


<a name= "contributing"></a>
## Contributing
\n${data.contributing}\n


<a name= "tests"></a>
## Tests
\n${data.tests}\n


<a name= "questions"></a>
## Questions
\n${data.title} was originally written by ${data.questionEmail}. You can reach him at ${data.questionName} on Github.


<a name= "license"></a>
## License
\n${data.license}\n

`;
console.log(returnString);
  return returnString;
  
}

module.exports = generateMarkdown;
