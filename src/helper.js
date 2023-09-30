function getInterest(principalAmount, durationInYears, interestRate) {
    return principalAmount * interestRate * durationInYears / 100;
}

module.exports = {
    getInterest,
}