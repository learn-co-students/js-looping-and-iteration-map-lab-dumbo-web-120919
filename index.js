// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {
        return driver.toLowerCase();
    });
}

function nameToAttributes(arr) {
    let result = [];
    arr.map(function(element) {
        let newArr = element.split(' ');
        result.push({ 'firstName': newArr[0], 'lastName': newArr[1] });
    })
    return result;
}

function attributesToPhrase(arrOfObjs) {
    return arrOfObjs.map(function(obj) {
        return `${obj['name']} is from ${obj['hometown']}`;
    });
}