let total = 0;

function deposit(x) {
  total += Number(x);
}

function withdrawl(x) {
  total -= Number(x);
}


function atm() {
  let i = 0;
  while (i < 10) {
    let service = prompt('Please enter a command.', 'D, W, B, or Q');
    if (service === 'Q') {
      alert('Goodbye!');
      break;
    }
    switch(service) {
      case 'D': {
        let input = prompt('Please enter the amount you want to deposit.')
        deposit(input);
        break;
      }
      case 'W': {
        let input = prompt('Please enter the amount you want to withdraw.')
        withdrawl(input);
        break;
      }
      case 'B': {
        alert('Your balance is ' + Number(total));
        break;
      }
      default: {
        alert('Command not found.')
      }
    }
    i++;
  }
}
