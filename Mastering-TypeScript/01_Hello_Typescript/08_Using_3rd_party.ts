/**
  Using 3rd Party libraries

  check `package.json` file
*/

import * as inquirer from 'inquirer';

inquirer.prompt(
    [
        {
            name: "first_name",
            message: "what is your name ?"
        }
    ]
).then(answers => {
    console.log(`you answered : ${answers.first_name}`);
})
