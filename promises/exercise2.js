const holdingMessage = () => {
  console.log('Waiting...');
}

const swingAxe = () => {
  setTimeout(() => {
    holdingMessage();
    console.log('Finished.');
  }, 100);
  holdingMessage();
  console.log('This is a sharp Medicine, but it is a Physician for all diseases and miseries.');
}

swingAxe();