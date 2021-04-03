const inquirer = require('inquirer')
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is your username?',
            name: 'userName',
        },
    ])
    .then((response) => {
    var nameInput = response.name;
    var location = response.location;
    var userName = response.userName;

    var htmlCode = 
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello my name is ${nameInput}</h1>
    <h2>My location is ${location}</h2>
    <h2>My Username is ${userName}</h2>
    
</body>
</html>`

    fs.writeFile('index.html', htmlCode, (err) =>
        err ? console.log(err) : console.log('Success!'))
    });




