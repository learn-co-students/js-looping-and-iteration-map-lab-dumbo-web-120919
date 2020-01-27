function lowerCaseDrivers(array) {
  let nameArray;
  nameArray = array.map(function (driver) {
    return driver.toLowerCase();
  });
  return nameArray;
};

function nameToAttributes(array) {
  return array.map(function (driver) {
    const driverFirst = driver.split(" ")[0];
    const driverLast = driver.split(" ")[1];
    
    return { firstName: driverFirst, lastName: driverLast };
  });
};

function attributesToPhrase(array) {
  return array.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
};