function atm() {
  let total = 0;
  let money = prompt('Please enter a command.', 'D, W, B, or Q');
  switch(money) {
    case 'Q':
      break;
    case 'D':
      prompt('Please enter the amount you want to deposit.');
    case 'W':
      prompt('Please enter the amount you want to withdraw.');
    case 'B':
      alert('Your balance is ' + total);
  }
}
