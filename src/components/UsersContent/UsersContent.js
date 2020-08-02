import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentUsers } from './currentUsers';
import './UsersContent.css';

export const UsersContent = ({ usersList, currentMonth }) => {
  const listToShow = getCurrentUsers(currentMonth, usersList);

  return (
    <ul className="list-group">
      {listToShow.map(user => (
        <li
          className="list-group-item"
          key={user.id}
        >
          {`${user.firstName} ${user.lastName}`}
        </li>
      ))}
    </ul>
  );
};

const UserList = PropTypes.shape({
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
});

UsersContent.propTypes = {
  usersList: PropTypes.arrayOf(
    UserList,
  ),
  currentMonth: PropTypes.string,
};

UsersContent.defaultProps = {
  usersList: [],
  currentMonth: '',
};
