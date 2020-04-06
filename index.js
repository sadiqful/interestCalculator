let data = [
  {'principal': 2500, 'time': 1.8 },
  {'principal': 1000, 'time': 5 },
  {'principal': 3000, 'time': 1 },
  {'principal': 2000, 'time': 3 },
]

function interestCalculator (arr) {
let dataArray = [];

//If the principal is greater than or equal to 2500 and the time is greater than 1 and less than 3, then rate = 3

for (let obj of arr){
  if (obj.principal >= 2500 && (obj.time >= 3)) {
    obj.rate = 3;
  }

//  If the principal is greater than or equal to 2500 and the time is greater than or equal to 3, then rate = 4

  else if (obj.principal >= 2500 && obj.time >= 3) {
    obj.rate = 4;
  }

// If the principal is less than 2500 or the time is less than or equal to 1, then rate = 2

  else if (obj.principal <2500 || obj.time <= 1) {
    obj.rate = 2;
  }

// Otherwise, rate = 1;
  else {
    obj.rate = 1;
  }

// Calculate the interest for each individual object using the formula: (principal * rate * time) / 100. 

  obj.interest = (obj.principal * obj.rate * obj.time)/100;
  dataArray.push(obj)
}

//Log the 'interestData' array to console BEFORE your return statement.
  console.log(dataArray)

// 
  return dataArray;
} 

// Finally, call/execute the function and pass the 'data' array you created.

interestCalculator(data)