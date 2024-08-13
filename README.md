# LoGo-style

LoGo: SVG Logo Generator

🎨 Overview
LoGo is a command-line application that helps you quickly generate custom SVG logos. Whether you need a simple design for a project or just want to experiment with shapes and colors, LoGo has you covered! With support for text input, shape selection, and color customization, you can create a logo that suits your style in seconds.

✨ Features
Custom Text: Enter up to 3 characters for your logo.
Color Customization: Choose any color for your text and shape using keywords or hexadecimal values.
Shape Selection: Pick from three shapes—Circle, Triangle, and Square—to create your logo.
Instant SVG Creation: Generates a 300x200 pixel SVG file named logo.svg.
Easy to Use: A simple, interactive CLI using Inquirer prompts.
📦 Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/logo-generator.git
cd logo-generator
Install Dependencies:

bash
Copy code
npm install
🚀 Usage
Run the application from the command line:

bash
Copy code
node index.js
Follow the prompts to customize your logo. After entering your choices, the application will generate an SVG file named logo.svg in the root directory.

🛠️ Directory Structure
go
Copy code
.
├── examples/           // Example SVG file(s) created with the app
├── lib/                
│   ├── shapes.js       // Shape classes (Triangle, Circle, Square)
│   ├── shapes.test.js  // Jest tests for shapes
├── .gitignore          // Files and directories to ignore in Git
├── index.js            // Main application file
├── package.json        // NPM package configuration
└── README.md           // This file!
🧪 Running Tests
LoGo comes with Jest unit tests to ensure the shapes render correctly.

Run the tests with:

bash
Copy code
npm test
📝 Example
Here’s a quick example of what you can create:

Text: "ABC"
Text Color: "#ff5733"
Shape: Circle
Shape Color: "blue"
The above configuration generates a logo with the text "ABC" inside a blue circle.

👥 Contributing
Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

🎥 Video Demo
Check out our video demo to see LoGo in action: https://app.screencastify.com/v3/watch/CSnuTCoNvBW0PdoxrZXC