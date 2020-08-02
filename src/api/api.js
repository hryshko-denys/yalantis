// import { PeopleListInterface, Person } from '../interfaces';

const URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

export const getData = async() => {
  const data = await fetch(URL).then(respond => respond.json());

  return data;
};
