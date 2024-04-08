const companyObj = {
    3: "Amex (American Express)",
    4: "Visa",
    5: "Mastercard",
    6: "Discover",
};


const convert = (arr) => {
    let myFunc = num => Number(num);
    let intArr = Array.from(arr, myFunc);
    return intArr;
}

// Add your functions below:
const validateCred = (arr) => {
  let sum = 0;
  let array = arr;
  let revArray = [];

  // making the reverse array
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(Number(arr[i]));
  }

  // taking off the first value of the revArray
  revArray.shift();

  // luhns alg
  for (let i = 0; i < revArray.length; i++) {
    if (i % 2 === 0) {
      if (2 * revArray[i] >= 10) {
        sum -= 9;
      }
      sum += 2 * revArray[i];
    } else {
      sum += revArray[i];
    }
  }
  console.log(
    "sum: " + sum,
    "validation number: " + array[array.length - 1],
    "luhns : " + (10 - (sum % 10)),
    "Thus " + (array[array.length - 1] === 10 - (sum % 10))
  );
  return array[array.length - 1] === 10 - (sum % 10);
};

const companyCheck = (arr) => {
    let company = 'comany not listed';
    for (let i in companyObj){
        if (arr[0] == i) {
            return ' and ' + companyObj[i] + ' is the company of the card';
        } 
    }

    return company;
}

document.querySelector('.enter-btn').addEventListener('mousedown', 
() => {
    const text = document.getElementById('numberText').value;
    if(validateCred(convert(text))) {
        document.querySelector('.result').innerHTML = text + ': is valid ' + companyCheck(convert(text));
    } else {
        document.querySelector('.result').innerHTML = text + ': is notvalid' ;
    }

});