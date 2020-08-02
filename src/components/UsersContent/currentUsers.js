export const getCurrentUsers = (month, data) => {
  switch (month) {
    case 'January':
      return data.filter(user => user.dob.slice(5, 7) === '01');
    case 'February':
      return data.filter(user => user.dob.slice(5, 7) === '02');
    case 'March':
      return data.filter(user => user.dob.slice(5, 7) === '03');
    case 'April':
      return data.filter(user => user.dob.slice(5, 7) === '04');
    case 'May':
      return data.filter(user => user.dob.slice(5, 7) === '05');
    case 'June':
      return data.filter(user => user.dob.slice(5, 7) === '06');
    case 'July':
      return data.filter(user => user.dob.slice(5, 7) === '07');
    case 'August':
      return data.filter(user => user.dob.slice(5, 7) === '08');
    case 'September':
      return data.filter(user => user.dob.slice(5, 7) === '09');
    case 'October':
      return data.filter(user => user.dob.slice(5, 7) === '10');
    case 'November':
      return data.filter(user => user.dob.slice(5, 7) === '11');
    case 'December':
      return data.filter(user => user.dob.slice(5, 7) === '12');
    default:
      return data;
  }
};
