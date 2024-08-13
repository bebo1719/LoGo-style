const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 || 'Text must be 3 characters or less'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for the text (keyword or hexadecimal):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for the shape (keyword or hexadecimal):'
  }
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;

  let shapeInstance;
  switch (shape) {
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    case 'circle':
      shapeInstance = new Circle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
  }

  shapeInstance.setColor(shapeColor);
  const svgShape = shapeInstance.render();

  const svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShape}
    ${svgText}
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});
