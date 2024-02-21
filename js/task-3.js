function checkForSpam(message) {

    const lowerCaseMessage = message.toLowerCase();
    switch(message) {
        case lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale"):
            return true;
            break;
        default:
            return false;
    }
}
    






console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true





const blw1 = "spam"
const blw2 = "sale"
const string1 = "Latest technology news"