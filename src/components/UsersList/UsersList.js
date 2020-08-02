import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { MonthList } from '../MonthList/MonthList';
import { UsersContent } from '../UsersContent/UsersContent';
import { getData } from '../../api/api';

import './UsersList.css';

export const UsersList = () => {
  const [usersList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState('');
  const [isUsersShown, setIsUsersShown] = useState(false);

  const getUsersList = async() => {
    setIsLoading(true);
    await getData().then(data => setUserList(data));
    setIsLoading(false);
  };

  const getCurrentMonth = (month) => {
    setCurrentMonth(month);
  };

  const toggleUsers = (isShown) => {
    setIsUsersShown(isShown);
  };

  return (
    <>
      <Button
        getUsersList={getUsersList}
        isLoading={isLoading}
      />
      <MonthList
        usersList={usersList}
        onCurrentMonth={getCurrentMonth}
        onToggleUsers={toggleUsers}
      />
      {isUsersShown
        && <UsersContent usersList={usersList} currentMonth={currentMonth} />
      }
    </>
  );
};
