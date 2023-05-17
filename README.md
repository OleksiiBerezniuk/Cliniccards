Cypress project
This repository contains the Cypress project for automated testing.

Prerequisites.
Before starting the Cypress project, make sure that the following software is installed on your computer:
Node.js: It can be downloaded from the official website - https://nodejs.org.

Installation
To set up and run your Cypress project locally, follow these steps:
1. Clone the repository to your computer using the following command:
       git clone https://github.com/OleksiiBerezniuk/CypressProject.git
2. Change to the project folder:
       cd Cliniccards
3. Install the project dependencies by running the following command:
       npm install
After the installation is complete, you can run Cypress tests.

Running Cypress tests
To run Cypress tests, follow these steps:
1. Make sure you are in the project folder.
2. Start the Cypress Test Runner by running the following command:
       npx cypress open
The Cypress Test Runner will open and you will see the available test files. Click on a test file to run it in Cypress Test Runner.

You can also run tests in GUI-free mode with the following command:
npx cypress run
This command will execute all tests in the project and provide the results on the command line.