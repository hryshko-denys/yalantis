export const getMonthColor = (month, data) => {
  let number = 0;

  if (data.length) {
    switch (month) {
      case 'January':
        number = data.filter(user => user.dob.slice(5, 7) === '01').length;
        break;
      case 'February':
        number = data.filter(user => user.dob.slice(5, 7) === '02').length;
        break;
      case 'March':
        number = data.filter(user => user.dob.slice(5, 7) === '03').length;
        break;
      case 'April':
        number = data.filter(user => user.dob.slice(5, 7) === '04').length;
        break;
      case 'May':
        number = data.filter(user => user.dob.slice(5, 7) === '05').length;
        break;
      case 'June':
        number = data.filter(user => user.dob.slice(5, 7) === '06').length;
        break;
      case 'July':
        number = data.filter(user => user.dob.slice(5, 7) === '07').length;
        break;
      case 'August':
        number = data.filter(user => user.dob.slice(5, 7) === '08').length;
        break;
      case 'September':
        number = data.filter(user => user.dob.slice(5, 7) === '09').length;
        break;
      case 'October':
        number = data.filter(user => user.dob.slice(5, 7) === '10').length;
        break;
      case 'November':
        number = data.filter(user => user.dob.slice(5, 7) === '11').length;
        break;
      case 'December':
        number = data.filter(user => user.dob.slice(5, 7) === '12').length;
        break;
      default:
        number = 0;
    }
  }

  return number;
};
