// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = generate.questions;
//first list index license name, second list index icon
const licenses = generate.licenses;

//functions

//set up title
function setTitle(data) {
  for (const key in licenses) {
    if (data.License[0] === licenses[key][0]) {
      const data2 = `# ${data.Title} ${licenses[key][1]}`;
      //write to readme file
      writeToFile("README.md", data2);
    }
  }
}

// set up rest of readme
function appendReadme(data) {
  //since we already have a title
  delete data.Title;
  //append rest of inputs
  for (const key in data) {
    const data3 = `\n## ${key} \n${data[key]}`;

    fs.appendFile("README.md", data3, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "Title",
      },
      {
        type: "input",
        message: questions[1],
        name: "Description",
      },
      {
        type: "input",
        message: questions[2],
        name: "Usage",
      },
      {
        type: "input",
        message: questions[3],
        name: "Installation",
      },
      {
        type: "input",
        message: questions[7],
        name: "Questions",
      },
      {
        type: "input",
        message: questions[5],
        name: "Contributers",
      },
      {
        type: "input",
        message: questions[6],
        name: "Tests",
      },
      {
        type: "input",
        message: questions[4],
        name: "TableOfContents",
      },
      {
        type: "checkbox",
        message: questions[8],
        name: "License",
        choices: [
          licenses.none[0],
          licenses.Apache2[0],
          licenses.Boost[0],
          licenses.Bsd2[0],
          licenses.Bsd2[0],
          licenses.CC0[0],
          licenses.Attribution4International[0],
          licenses.AttributionShareAlike4International[0],
          licenses.AttributionNonCommercial4International[0],
          licenses.AttributionNoDerivates4International[0],
          licenses.AttributionNonCommmercialShareAlike4International[0],
          licenses.AttributionNonCommercialNoDerivatives4International[0],
          licenses.EclipsePublicLicense1[0],
          licenses.GNUGPLv3[0],
          licenses.GNUGPLv2[0],
          licenses.GNUAGPLv3[0],
          licenses.GNUFDLv13[0],
          licenses.TheHippocraticLicense21[0],
          licenses.TheHippocraticLicense3[0],
          licenses.IBMPublicLicenseVersion1[0],
          licenses.ISCLicense[0],
          licenses.TheMITLicense[0],
          licenses.MozillaPublicLicense2[0],
          licenses.AttributionLicense[0],
          licenses.OpenDatabaseLicense[0],
          licenses.PublicDomainDedicationandLicense[0],
          licenses.ThePerlLicense[0],
          licenses.TheArtisticLicense2[0],
          licenses.SILOpenFontLicense1[0],
          licenses.WTFPL[0],
          licenses.Zlib[0],
        ],
      },
    ])
    .then((response) => {
      let data = response;
      //attemps to set link
      data.TableOfContents = `${data.TableOfContents} \n\n* [Link to Description](#description)\n* [Link to Usage](#usage)\n* [Link to Installation](#installation)\n* [Link to Contributers](#contributers)\n* [Link to Questions](#questions)\n* [Link to Tests](#tests)\n* [Link to License](#license)`;

      setTitle(data);
      //append rest of inputs
      appendReadme(data);
    });
}

// Function call to initialize app
init();
