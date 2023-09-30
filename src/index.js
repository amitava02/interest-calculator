const inquirer = require('inquirer');
const { getInterest } = require('./helper');

inquirer
    .prompt([
        { type: 'number', name: 'principalAmount', message: 'Enter the principal amount' },
        { type: 'number', name: 'interestRate', message: 'Enter the interest rate' },
        { type: 'number', name: 'durationInYears', message: 'Enter the duration of loan in years' },
    ])
    .then((answers) => {
        const { principalAmount, interestRate, durationInYears } = answers;

        if (isNaN(principalAmount)) {
            console.log('Invalid principal amount. Please type a number only.');
            process.exit(1);
        }
        if (isNaN(interestRate)) {
            console.log('Invalid interest rate. Please type a number only.');
            process.exit(1);
        }
        if (isNaN(durationInYears)) {
            console.log('Invalid duration. Please type a number only.');
            process.exit(1);
        }

        const interestAfterDuration = getInterest(principalAmount, durationInYears, interestRate);
        console.log('Interest after ' + durationInYears + ' years is Rs. ' + interestAfterDuration);
        console.log('Total amount payable is Rs. ' + (interestAfterDuration + principalAmount));
    })
    .catch(err => {
        console.log(err.message);
    })
