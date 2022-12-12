import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Gender() {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  useEffect(() => {
    axios.get('https://gorest.co.in/public/v2/users')
      .then((response) => {
        const maleUsers = response.data.filter(user => user.gender === 'male');
        const femaleUsers = response.data.filter(user => user.gender === 'female');
        setMaleCount(maleUsers.length);
        setFemaleCount(femaleUsers.length);
      });
  }, []);

  return (
    <div>
      <h1>User Counter</h1>
      <p>Male users: {maleCount}</p>
      <p>Female users: {femaleCount}</p>
    </div>
  );
}
export default Gender