import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import className from 'classnames';
import { getMonthColor } from './monthColor';
import './MonthList.css';

const months = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const MonthList = ({ usersList, onCurrentMonth, onToggleUsers }) => {
  const showCurrentMonth = (event) => {
    const month = event.target.textContent;

    onCurrentMonth(month);
    onToggleUsers(true);
  };

  const hideCurrentMonth = () => {
    onCurrentMonth('');
    onToggleUsers(false);
  };

  return (
    <ul className="nav nav-tabs">
      {months.map((month) => {
        const bornThisMonth = getMonthColor(month, usersList);
        const monthClassName = className('nav-link',
          { grey: (bornThisMonth < 3) },
          { blue: (bornThisMonth >= 3 && bornThisMonth < 7) },
          { green: (bornThisMonth >= 7 && bornThisMonth < 11) },
          { red: (bornThisMonth >= 11) });

        return (
          <li
            value={month}
            className="nav-item"
            onMouseEnter={showCurrentMonth}
            onMouseOut={hideCurrentMonth}
            onBlur={hideCurrentMonth}
            key={uuid()}
          >
            <a
              className={monthClassName}
              href="/"
            >
              {month}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const UserList = PropTypes.shape({
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
});

MonthList.propTypes = {
  usersList: PropTypes.arrayOf(
    UserList,
  ),
  onCurrentMonth: PropTypes.func.isRequired,
  onToggleUsers: PropTypes.func.isRequired,
};

MonthList.defaultProps = {
  usersList: [],
};
