// // Code your solution in this file.


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function lowerCaseDrivers(drivers){
        return drivers.map(function(names){
         return names.toLowerCase();
    })
}

function nameToAttributes(drivers){
    return drivers.map(function(name){
        const nameFirst = name.split(' ')[0];
        const nameLast = name.split(' ')[1];
        return {firstName: nameFirst, lastName: nameLast }
    });
}

 function attributesToPhrase(drivers){
     return drivers.map(function(name){
         return `${name.name} is from ${name.hometown}`;
     });
 } 
  
//   function attributesToPhrase(drivers) {
//     return drivers.map(function(driver) {
//       return `${driver.name} is from ${driver.hometown}`;
//     });
//   }
  
