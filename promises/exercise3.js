const checkForBlanks = (inputValue) => {
  return new Promise((resolve, reject) => {
    if (inputValue === '') {
      reject(Error("Blank values are not allowed"));
    } else {
      resolve(inputValue);
    }
  })
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Time out!'));
  }, 1000);
  resolve('');
}).then(output => checkForBlanks(output), error => console.log(error.message))
  .then(chekedOuput => console.log(chekedOuput))
  .catch(error => console.log(error.message))