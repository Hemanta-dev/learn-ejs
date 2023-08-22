const ejs = require('ejs');
const fs = require('fs');
const path = require('path'); // Import the 'path' module


const dataFilePath = path.join(__dirname, 'data.json');

const dataContent = fs.readFileSync(dataFilePath, 'utf8');


const data = JSON.parse(dataContent);



const templateFile = path.join(__dirname, 'views', 'example.ejs');
const templateContent = fs.readFileSync(templateFile, 'utf8');


const renderedTemplate = ejs.render(templateContent, { data : data[0]}); 

console.log(renderedTemplate);
