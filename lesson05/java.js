let total = 0;


function atm() {
  let i = 0;
  while (i < 5) {
    let service = prompt('Please enter a command.', 'D, W, B, or Q');
    if (service === 'Q') {
      alert('Goodbye!');
      break;
    }
    switch(service) {
      case 'D': {
        prompt('Please enter the amount you want to deposit.');
        break;
      }
      case 'W': {
        prompt('Please enter the amount you want to withdraw.')
        break;
      }
      case 'B': {
        alert('Your balance is ' + total);
        break;
      }
      default: {
        alert('Command not found.')
      }
    }
    i++;
  }
}
